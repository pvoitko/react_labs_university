function City(props) {
    let { value } = props;
    return (
        <option value={value}>{props.children}</option>
    )
}

export default City;