
import City from "./City";

function Cities(props) {
    return (
        <>
        <select name="city_select">
            {props.cities.map((city) => {
                let { id, name } = city;
                return (<City key={id} value={id}>{name}</City>)
            })}
        </select>
        </>
    )
}

export default Cities