import {doc, getDoc, getFirestore} from "firebase/firestore";
import {useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function ItemDetail(){
       
  const {onAdd} = useContext(Context)
  let [quantity,setQuantity] = useState(0); 
  const [detail, setDetail] = useState(null);  
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const notify = () => toast("Book added to cart");

  useEffect(() =>{
    setIsLoading(true)
    const db = getFirestore()
    const itemRef = doc(db,'items',params.id);

    getDoc(itemRef).then((resolve) => {
       if (resolve.exists()) {
        setDetail({id: resolve.id, ...resolve.data()})
        setIsLoading(false);
       }
    }).catch((error) => console.log(error));
  },[]);
    if (isLoading){
      return <div style={{display:"flex", justifyContent:"center", textAlign:"center",flexDirection:"column", alignItems:"center", paddingTop:"10rem"}}> <RingLoader color="#36d7b7"/> <h2>Loading</h2></div>
    }else{
    return (
      <Card className="text-center" style={{margin: '2rem 5rem 2rem 5rem'}}>
        <Card.Body>
            <Card.Img style={{ height: '300px', width: '250px', justifyContent: 'center', marginBottom: '1rem'}} variant="top" src={"/src/assets/" + detail.image} />
          <Card.Title>{detail.name}</Card.Title>
          <Card.Text>
            {detail.description}
          </Card.Text>  
          <Card.Text>
            Stock:{detail.stock}
          </Card.Text>  
          <Card.Text style={{marginBottom: '1rem', backgroundColor:"green", color:"white", borderRadius: "20px", margin: '0rem 35% 0rem 35%'}}>Precio: USD {detail.price}</Card.Text>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"center", gap:"20px",paddingTop:"10px"}}>
          <Button onClick={() => setQuantity( quantity >= 1? (quantity) => quantity - 1: 0)}>-</Button>
            <p style={{all:"unset", }}>{quantity}</p>
          <Button onClick={() => setQuantity((quantity) => quantity < detail.stock ? quantity + 1 : quantity)}>+</Button>
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            {quantity != 0 ? <Button style={{color:"white", borderRadius: "10px ",margin: '1rem 40rem 0rem 40rem', whiteSpace:"nowrap"}}
            onClick={() => {
            onAdd(detail,quantity)
            setQuantity(0)
            notify()
            }}>Add to cart</Button> : null}
            <ToastContainer />
          </div>
        </Card.Body>
      </Card>
    );
  }
  }


export default ItemDetail;
