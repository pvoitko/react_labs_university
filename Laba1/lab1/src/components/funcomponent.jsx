import React from "react";

const product1 = {name: "gray", second: "mouse"}

const Product = (props) => {
    return (
        <div>
            I'm a {props.product.name} and I am a {props.product.second}
        </div>
    );
}

const Function = () => {
    return (
        <div>
            <Product product={product1}/>
        </div>
    );
}

export default Function;
