import { useState, useEffect } from 'react'
import ItemList from '../ItemList';
import Products from '../../mocks/products';

function ItemListContainer({boolcategory,categoryId}){

    const [agregar,setAgregar] = useState([]);

    useEffect(()=>{
        const products_promise = new Promise((resolve, reject) => setTimeout(() => resolve (Products),2000));

        products_promise
        .then((response) => {
            if(boolcategory){
            const filtro = response.filter((a) => a.category === categoryId)
            setAgregar(filtro)
        }else{
            setAgregar(response)
        }
        })
        .catch((err) => console.log(err));
    },[categoryId]);

    return(
        <div>
            <ItemList products={agregar}/>
        </div>
    )
}

export default ItemListContainer;