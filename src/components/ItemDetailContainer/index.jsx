import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail';
import Products from '../../mocks/products';

function ItemDetailContainer({Id}){

    const [Detail,setDetail] = useState([]);
   
    useEffect(()=>{
        const products_promise = new Promise((resolve, reject) => setTimeout(() => resolve (Products),2000));

        products_promise
        .then((response) => {
            const detalle = response.find((a) => parseInt(a.id) === parseInt(Id))
            setDetail(detalle)
        })
        .catch((err) => console.log(err));
    },[Id]);

    return(
        <div>
            <ItemDetail products={Detail}/>
            <p>{console.log(Detail)}</p>
        </div>
    )
}

export default ItemDetailContainer;