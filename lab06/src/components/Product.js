import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Card, ListGroup} from "react-bootstrap";

const Product = () => {
    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <Card style={{width: '30rem'}}>
            <Card.Img variant="top" src={product.thumbnail}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                        <ListGroup.Item>Price: {product.price}$</ListGroup.Item>
                        <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                <Link to={`/category/${product.category}/products`}><Button
                    variant="primary">{product.category}</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Product;