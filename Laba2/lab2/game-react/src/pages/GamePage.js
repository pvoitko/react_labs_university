import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from "react-redux";
import { addNumbers, clearNumbers } from "../store/reducers/numbers/numbersReducer";
import { numbersSelector } from '../store/selectors/selectors';
import { GameForm } from '../components/GameForm';
import { ResultGame } from '../components/ResultGame';
import { ResultList } from '../components/ResultList';
import { generatorRandomInt } from '../utils/generatorRandomInt';

const GAME_RESULTS = {
    win: 'Good Job!',
    gameOver: 'Game Over!',
}
const MIN_SECRET = 1;
const MAX_SECRET = 1000;
const MAX_STEP = 3;

const GamePage = () => {
    const [startGame, setStartGame] = useState(false);
    const [winGame, setWinGame] = useState(false);
    const [gameResult, setGameResult] = useState('');
    const [secretNumber, setSecretNumber] = useState(0);
    const dispatch = useDispatch();
    const numbers = useSelector(numbersSelector);

    const handlerStartGame = () => {
        setWinGame(false);
        setStartGame(true);
        setGameResult('');
        dispatch(clearNumbers());
        const secretNumber = generatorRandomInt(MIN_SECRET, MAX_SECRET);
        setSecretNumber(secretNumber)
    }

    const checkResult = (value) => {
        if (Number(value) === secretNumber) {
            setWinGame(true);
            return '';
        }
        if (Number(value) > secretNumber) {
            return `N < ${value}`;
        }
        return `N > ${value}`;
    }

    const handlerCheck = (checkValue) => {
        const value = checkResult(checkValue);
        if (value) {
            const payload = {
                id: uniqid(),
                value
            }
            dispatch(addNumbers(payload))
        }
    }

    useEffect(() => {
        if (winGame) {
            setStartGame(false);
            setGameResult(GAME_RESULTS.win);
        }
    }, [winGame])

    useEffect(() => {
        if (numbers.length === MAX_STEP && !winGame) {
            setStartGame(false);
            setGameResult(GAME_RESULTS.gameOver);
        }
    }, [numbers, winGame])

    return (
        <div className="game-wrapper">
            <div className="header">
                <button disabled={startGame} onClick={handlerStartGame} className="game-button">New Game</button>
                <GameForm onSubmit={handlerCheck} startGame={startGame} />
            </div>
            <div className="content">
                <h2 className="content-title">Information: </h2>
                {numbers.length > 0 && <ResultList />}
            </div>
            <div className="footer">
                <ResultGame attempts={numbers.length} result={gameResult} />
            </div>
        </div>
    )
}
export { GamePage }