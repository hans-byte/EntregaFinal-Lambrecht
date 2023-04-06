import { useContext, useState } from "react";
import { Context } from "../../context";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function CartView() {
    const {itemsAdded, clear,removeItem} = useContext(Context);
    const [itemsToPurchase,setItemsToPurchase] = useState([]);
    
    function pay(purchase){
      purchase.forEach(element => {
        element.total = element.quantity * element.price
      });

      return (
      setItemsToPurchase(purchase),
      console.log(itemsToPurchase)
      )
    }

    if (!itemsAdded || itemsAdded.length === 0){
      return (
      <div style={{paddingTop:"10rem", textAlign:"center"}}>
        <h2>Ups! Nothing here... [yet]</h2>
      </div>
      )
    }else{
    return (
      <div style={{textAlign:"center"}}>
        <h2 style={{margin:"2rem 0rem 2rem 0rem"}}>Your cart</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Book</th>
              <th>Author</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
          {itemsAdded.map((product) => {
          return(
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.author}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.price * product.quantity}</td>
              <td><Button variant="outline-danger" onClick={() => removeItem(product.id)}>Remove from the Cart</Button></td>
            </tr>
          )
          })}
          </tbody>
        </Table>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"center", gap:"20px"}}>
          <Button variant="success" onClick={() => pay(itemsAdded)}>Proceed to Pay</Button>
          <Button variant="danger" onClick={clear} >Clean</Button>
        </div>
      </div>
    )
  }
}
  
  export default CartView