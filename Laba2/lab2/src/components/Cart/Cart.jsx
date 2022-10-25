import {Box, Table, TableBody, TableCell, TableFooter, TableHeader, TableRow} from "grommet";
import {useState} from "react";
import ItemRow from "./ItemRow";

export default function Cart(props) {
    let { cart } = props;

    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const changeTotalQuantity = (quantity) => {
        setItemsQuantity(itemsQuantity + quantity);
    }

    const changeTotalCost = (price) => {
        setTotalCost(totalCost + price);
    }

    return (

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Total</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cart.map(({name, price, min, id}, index) => (
                        <ItemRow key={id || index} name={name} price={price} min={min}
                                 changeTotalQuantity={changeTotalQuantity}
                                 changeTotalCost={changeTotalCost} />
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell align="left" colSpan={2}>Totals</TableCell>
                        <TableCell align="center">{itemsQuantity}</TableCell>
                        <TableCell align="center">{totalCost}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

    )
}