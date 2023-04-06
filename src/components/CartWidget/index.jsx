import { useContext } from "react";
import "./cartwidget.css"
import { Context } from "../../context";
import { NavLink } from "react-router-dom";

function CartWidget(){
    const {itemsAdded} = useContext(Context);
    let sumTotal = 0;
    function sum(){
        if (!itemsAdded || itemsAdded.length === 0){
            return 0
        }else{
        Object.values(itemsAdded).forEach((item) => {
            sumTotal += item.quantity
        })
        return sumTotal
    }
    }
    return(
        <div className="cartwidget">
            <NavLink style={{display:"flex",flexDirection:"row",alignItems:"flex-end", justifyContent:"center", gap:"1rem",  color: "grey", textDecoration:"none"}} to="/cart">
            <img src="https://img.icons8.com/arcade/64/null/shopping-bag-full.png"/>
            <p>{sum()}</p>
            </NavLink>
        </div>
    )
}

export default CartWidget;