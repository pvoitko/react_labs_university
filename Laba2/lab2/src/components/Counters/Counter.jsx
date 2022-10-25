import {useState} from "react";
import {Box, Button, Paragraph} from "grommet";

export default function Counter(props) {
    let { initial, max, min } = props;
    max = max || 10;
    min = min || -10;

    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < max) {
            setCount((val) => val + 1);
        }
    }
    const decrement = () => {
        if (count > min) {
            setCount((val) => val - 1);
        }
    }

    return (
        <Box direction="row" margin="small" pad="xsmall" >
            <Paragraph >The current count: {count}</Paragraph>
            <Button margin="small" default onClick={increment} label="+"/>
            <Button margin="small" default onClick={decrement} label="-"/>
            <Button margin="small" default onClick={() => setCount(initial)} label="Reset"/>
        </Box>
    );
}