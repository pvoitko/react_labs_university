import { useState } from 'react';

const GameForm = ({ onSubmit, startGame }) => {
  const [fieldValue, setFieldValue] = useState('');

  const handlerChange = e => {
    const { value } = e.target;
    setFieldValue(value)
  };

  const handlerFormSubmit = e => {
    e.preventDefault();
    onSubmit(fieldValue);
    setFieldValue('');
  };

  return (
    <form className="game-form" onSubmit={handlerFormSubmit}>
      <input
        className="game-input"
        type="number"
        onChange={handlerChange}
        value={fieldValue}
        min='0'
        max='1000'
        required
      />
      <button className="game-button" type='submit' disabled={!startGame}>Check</button>
    </form>
  )
}
export { GameForm }