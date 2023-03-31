import { useContext, useState } from "react";
import { Context } from "../../context";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function CartView() {
    const {itemsAdded, clear,removeItem} = useContext(Context);
    const [itemsToPurchase,setItemsToPurchase] = useState([]);
    
    function pay(purchase){
      const p_q = purchase.map((item) => (item.price * item.cantidad))
      return setItemsToPurchase((total) => total.concat({...purchase,total: p_q}));
    }

    if (!itemsAdded || itemsAdded.length === 0){
      return (
      <div style={{paddingTop:"10rem", textAlign:"center"}}>
        <h2>Ups! Nada por aqui... [aún]</h2>
      </div>
      )
    }else{
    return (
      <div style={{margin: "10rem 1rem 0 rem 1rem"}}>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Item</th>
              <th>Libro</th>
              <th>Cantidad</th>

              <th>Precio</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
          {itemsAdded.map((product) => {
          return(
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.cantidad}</td>
              <td>{product.price}</td>
              <td>{product.price * product.cantidad}</td>
              <td><Button variant="outline-danger" onClick={() => removeItem(product.id)}>Quitar del carrito</Button></td>
            </tr>
          )
          })}
          </tbody>
        </Table>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"center", gap:"20px"}}>
          <Button variant="success" onClick={() => pay(itemsAdded)}>Pagar</Button>
          <Button variant="danger" onClick={clear} >Limpiar carrito</Button>
        </div>
      </div>
    )
  }
}
  
  export default CartView