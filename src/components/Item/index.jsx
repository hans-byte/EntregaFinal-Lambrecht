import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({product}) {
  return (
        <Card style={{ width: '250px' }}>
        <Card.Img style={{ height: '300px', width: '250px', justifyContent: 'center'}} variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                Autor: {product.author}
            </Card.Text>
            <Card.Text>
                Precio: USD <strong>{product.price}</strong>
            </Card.Text>
            <Button variant="success">Más info</Button>
        </Card.Body>
        </Card>
  );
}

export default Item;