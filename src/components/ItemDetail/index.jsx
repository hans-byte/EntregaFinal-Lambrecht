import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState, useEffect } from 'react'


function ItemDetail({products}){
    const [cantidad,setCantidad] = useState(0); 
    return (
        <Card className="text-center">
        <Card.Header>Autor: {products.author}</Card.Header>
        <Card.Body>
            <Card.Img style={{ height: '300px', width: '250px', justifyContent: 'center', marginBottom: '1rem'}} variant="top" src={products.image} />
          <Card.Title>{products.name}</Card.Title>
          <Card.Text>
            {products.description}
          </Card.Text>
          <Button variant="success" style={{marginBottom: '1rem'}}>Precio: USD {products.price}</Button>
          <p>Agregar al carrito:</p>
          <ButtonGroup className="mb-2">
            <Button onClick={() => setCantidad( cantidad >= 1? (cantidad) => cantidad - 1: 0)}>-</Button>
            <Button onClick={() => setCantidad((cantidad) => cantidad + 1)}>+</Button>
      </ButtonGroup>
        </Card.Body>
        <Card.Footer className="text-muted">Cantidad de este item agregada al carrito: {cantidad}</Card.Footer>
      </Card>
    );
}

export default ItemDetail;