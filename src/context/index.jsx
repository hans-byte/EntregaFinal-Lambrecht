import { createContext, useState } from "react";

export const Context = createContext();
export function CustomProvider({children}){
const [itemsAdded,setItemsAdded] = useState([]);

    function onAdd(detail,cantidad) {
        const enCarrito = isIncart(detail);
        if (enCarrito){
            const productAModificar = itemsAdded.find((itemsAdded) => itemsAdded.id === detail.id);
            const productModificado = {
                ...productAModificar,
                cantidad: productAModificar.cantidad + cantidad
            }
            setItemsAdded((prev) => prev.map((prevState) => prevState.id === detail.id ? productModificado : prevState));
        }else{
            setItemsAdded((prev) => prev.concat({...detail,cantidad: cantidad}));
        }
    }


    function clear(){
        setItemsAdded([])
    }

    function removeItem(itemId){
        if (itemsAdded.length == 1){
            return clear()
        }else{
            return setItemsAdded(itemsAdded.forEach((item,index) => item.id === String(itemId) ? itemsAdded.splice(index,1): item));
        }
    }


    function isIncart(detail) {
        return itemsAdded.some((productoAñadido) => productoAñadido.id === detail.id)
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

