import ItemDetail from '../ItemDetail';
import {doc, getDoc, getFirestore} from "firebase/firestore";
import {useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';


function ItemDetailContainer(){
   
    return(
        <div>
            <Card className="text-center" style={{padding: '2rem 0px 2rem 0px'}}>
            <ItemDetail/>
            </Card>
        </div>
    )
}

export default ItemDetailContainer;