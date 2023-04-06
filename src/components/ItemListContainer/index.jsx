import { useState, useEffect } from 'react'
import ItemList from '../ItemList';
import RingLoader from 'react-spinners/RingLoader';
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

function ItemListContainer({boolcategory,categoryId}){

    const [agregar,setAgregar] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        const db = getFirestore()
        const itemsCollection = collection(db,'items')

        if (boolcategory){
            const queryResults = query(itemsCollection, where('category', '==' , categoryId))
            getDocs(queryResults).then((snapshot) => {
                const docs = snapshot.docs;
                setAgregar(docs.map((documentos) => ({id: documentos.id, ...documentos.data()})))
                setIsLoading(false);
            }).catch((error) => console.log(error))
        }else{
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs;
            setAgregar(docs.map((documentos) => ({id: documentos.id, ...documentos.data()})))
            setIsLoading(false);
        }).catch((error) => console.log(error))
        }
        }, [categoryId]);

    if (isLoading){
        return <div style={{display:"flex", justifyContent:"center", textAlign:"center",flexDirection:"column", alignItems:"center", paddingTop:"10rem"}}> <RingLoader color="#36d7b7"/> <h2>Loading</h2></div>
    }else{
    return(
        <div>
            <ItemList products={agregar}/>
        </div>
    )
}
}

export default ItemListContainer;