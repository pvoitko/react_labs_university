import { useSelector } from "react-redux";
import { numbersSelector } from '../store/selectors/selectors';

const ResultList = () => {
  const numbers = useSelector(numbersSelector);

  return (
    <ul className="check-list">
      {numbers.map(({ value, id }) => (
        <li className="check-list-item" key={id}>
          {value}
        </li>
      ))}
    </ul>
  )
}
export { ResultList }