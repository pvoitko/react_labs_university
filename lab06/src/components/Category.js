import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);

    return (
        <div>
            <ListGroup>
                {category.map(cat => <ListGroup.Item><Link
                    to={`/category/${cat}/products`}>{cat}</Link></ListGroup.Item>)}
            </ListGroup>
        </div>
    );
};

export default Category;