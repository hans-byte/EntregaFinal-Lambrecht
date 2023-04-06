import { createContext, useState } from "react";

export const Context = createContext();
export function CustomProvider({children}){
const [itemsAdded,setItemsAdded] = useState([]);

    function onAdd(detail,quantity) {
        const inCart = isIncart(detail);
        if (inCart){
            const productToModify = itemsAdded.find((itemsAdded) => itemsAdded.id === detail.id);
            const productModified= {
                ...productToModify,
                quantity: productToModify.quantity + quantity
            }
            setItemsAdded((prev) => prev.map((prevState) => prevState.id === detail.id ? productModified : prevState));
        }else{
            setItemsAdded((prev) => prev.concat({...detail,quantity: quantity}));
        }
    }

    function clear(){
        setItemsAdded([])
    }

    function removeItem(itemId){ 
        setItemsAdded(itemsAdded.filter( item => item.id !== String(itemId)))
    }


    function isIncart(detail) {
        return itemsAdded.some((add) => add.id === detail.id)
    }

    const onRemove = () =>{
        setItemsAddedQuantity((prev) => prev.slice(1));
    }

    const value = {
        itemsAdded,
        onAdd,
        onRemove,
        clear,
        removeItem,
    };

    return <Context.Provider value={{itemsAdded,onAdd,clear,removeItem,value}}>{children}</Context.Provider>;
}

export default CustomProvider;

