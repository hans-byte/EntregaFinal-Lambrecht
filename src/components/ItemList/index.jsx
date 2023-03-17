import Item from "../Item";
import "./ItemList.css"

function ItemList({products}){
    return (
        <div className="content">
            <ul className="libros">
            {products.map((product, index) => (<Item product={product} key={product.id}/>))}
            </ul>
        </div>
    );
}

export default ItemList;