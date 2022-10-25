import {useState} from "react";

const colors = [
    {
        id: 1,
        color: 'black'
    },
    {
        id: 2,
        color: 'green'
    },
    {
        id: 3,
        color: 'red'
    },
    {
        id: 4,
        color: 'purple'
    },
]

const Color = () => {
    const [color, setColor] = useState('black')
    return (
        <>
            <h1 style={{color: color}}>{color}</h1>
            <select onChange={(e) => {
                setColor(e.target.value)
            }} id="colors">
                {colors.map((color) => <option value={color.color}>{color.color}</option>)}
            </select>
        </>
    );
}

export default Color;
