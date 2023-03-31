import {doc, getDoc, getFirestore} from "firebase/firestore";
import {useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';


export function ItemDetail(){
       
  const {onAdd} = useContext(Context)
  let [cantidad,setCantidad] = useState(0); 
  const [detail, setDetail] = useState(null);  
  const params = useParams()

  useEffect(() =>{
    const db = getFirestore()
    const itemRef = doc(db,'items',params.id);

    getDoc(itemRef).then((resolve) => {
       if (resolve.exists()) {
        setDetail({id: resolve.id, ...resolve.data()})
       }
    }).catch((error) => console.log(error));
  },[]);
    if (detail == null){
      <h2>Loading</h2>
    }else{
    return (
        <Card.Body>
            <Card.Img style={{ height: '300px', width: '250px', justifyContent: 'center', marginBottom: '1rem'}} variant="top" src="" />
          <Card.Title>{detail.name}</Card.Title>
          <Card.Text>
            {detail.description}
          </Card.Text>  
          <Card.Text>
            Stock:{detail.stock}
          </Card.Text>  
          <Card.Text style={{marginBottom: '1rem', backgroundColor:"green", color:"white", borderRadius: "20px", margin: '0rem 40rem 0rem 40rem'}}>Precio: USD {detail.price}</Card.Text>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"center", gap:"20px",paddingTop:"10px"}}>
          <Button onClick={() => setCantidad( cantidad >= 1? (cantidad) => cantidad - 1: 0)}>-</Button>
          <p style={{all:"unset", }}>{cantidad}</p>
          <Button onClick={() => setCantidad((cantidad) => cantidad < detail.stock ? cantidad + 1 : cantidad)}>+</Button>
          </div>
          <div>
            {cantidad != 0 ? <Button style={{color:"white", borderRadius: "10px ",margin: '1rem 40rem 0rem 40rem',}}
          onClick={() => {
            onAdd(detail,cantidad)
            alert("Elemento agregad al carrito correctamente")
            setCantidad(0)
            }}>Agregar al carrito</Button> : null}
          </div>
        </Card.Body>
    );
  }
  }


export default ItemDetail;
