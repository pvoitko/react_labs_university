import {Box, Button, Paragraph, TableCell, TableRow} from "grommet";
import {useState} from "react";

export default function ItemRow(props) {
    let { name, price, min, changeTotalQuantity, changeTotalCost } = props;
    min = min || 0;
    const [count, setCount] = useState(min);

    const increment = () => {
        setCount(count + 1);
        changeTotalQuantity(1);
        changeTotalCost(price);
    }
    const decrement = () => {
        if (count > min) {
            setCount(count - 1);
            changeTotalQuantity(-1);
            changeTotalCost(-price);
        }
    }

    return (
        <TableRow>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="center">{price}</TableCell>
            <TableCell>
                <Box direction="row" align="center" justify="center">
                    <Button margin="small" primary size="small" onClick={decrement} label="-"/>
                    <Paragraph>{count}</Paragraph>
                    <Button margin="small" primary size="small" onClick={increment} label="+"/>
                </Box>
            </TableCell>
            <TableCell align="center">
                {count * price}
            </TableCell>
        </TableRow>
    )
}