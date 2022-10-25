import {Box} from "grommet";
import Counter from "./Counter";

export default function CountersList(props) {
    const { counters } = props
    return (
       <>
            {counters.map(({id, initial, min, max}, index) => (
                <Counter initial={initial} min={min} max={max} key={id || index.toString()} />
            ))}
       </>
    );
}