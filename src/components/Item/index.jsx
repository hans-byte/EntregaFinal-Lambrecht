import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; 

function Item({product}) {
  return (
        <Card style={{ width: '250px' }}>
        <Card.Img style={{ height: '300px', width: '248px', justifyContent: 'center'}} variant="top" src={"/src/assets/" + product.image} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                Author: {product.author}
            </Card.Text>
            <Card.Text>
                Price: USD <strong>{product.price}</strong>
            </Card.Text>
            <Link to={`/item/${product.id}`}>
                <Button variant="success">More info</Button>
            </Link>
        </Card.Body>
        </Card>
  );
}

export default Item;