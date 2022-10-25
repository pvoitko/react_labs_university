import React, {useState} from "react";
import {Button, Card} from 'react-bootstrap';


const products = [
    {
        id: 1,
        title: 'Стіл з електро-регулюванням висоти RZTK eDesk RGB Carbon',
        price: '16000',
        oldprice: '18000',
        img: 'https://content2.rozetka.com.ua/goods/images/big/273094304.jpg',
        InStock: 'Є в наявності',
    },
    {
        id: 2,
        title: 'Комп\'ютерний стіл Trust GXT 711 Dominus (22523)',
        price: '5700',
        oldprice: '8000',
        img: 'https://content.rozetka.com.ua/goods/images/big/15108611.jpg',
        InStock: 'Є в наявності',
    },
    {
        id: 3,
        title: 'Геймерський стіл Barsky CYB-SPORT 140х60х75 см CYBS-02',
        price: '10000',
        oldprice: null,
        img: 'https://content.rozetka.com.ua/goods/images/big/273711715.jpg',
        InStock: null,
    },
    {
        id: 4,
        title: 'Комп\'ютерний стіл Roko БЮ102 Бук (076521)',
        price: '1200',
        oldprice: null,
        img: 'https://content.rozetka.com.ua/goods/images/big/12267974.jpg',
        InStock: 'Є в наявності',
    },
]

const CardA = (props) => {
    return (
        <>

            <Card style={{width: '10rem'}}>
                <Card.Img variant="top" src={props.product.img}/>
                <Card.Body>
                    <Card.Title>{props.product.title}</Card.Title>
                    {props.product.oldprice
                        ? <div>
                            <Card.Text>
                                <small className="text-muted">
                                    <del>{props.product.oldprice} ₴</del>
                                </small>
                            </Card.Text>
                            <Card.Text style={{color: 'red'}}>{props.product.price} ₴</Card.Text>
                        </div>
                        : <Card.Text>{props.product.price} ₴</Card.Text>
                    }
                    {
                        props.product.InStock
                            ? <small className="text-muted">{props.product.InStock}</small>
                            : <small className="text-muted"></small>
                    }
                </Card.Body>
            </Card>

        </>
    )
}

const AllCards = (props) => {

    const [more, setMore] = useState(false)

    const num = more ? products.length : 2;
    return (
        <div className="card-group">
            {props.data.slice(0, num).map((card) => <CardA key={card.id} product={card}></CardA>)}
            {more
                ? <Button onClick={() => setMore()}>Показати меньше</Button>
                : <Button onClick={() => setMore(true)}>Показати більше</Button>
            }
        </div>
    )
}

const Exercise4 = () => {
    return (
        <>
            <h1>Exercise 4</h1>
            <AllCards data={products}></AllCards>
        </>
    )
}

export default Exercise4;