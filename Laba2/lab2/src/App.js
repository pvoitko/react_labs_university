import CountersList from "./components/Counters/Arrofcounter";
import './App.css';
import Cart from "./components/Cart/Cart";


const counters = [
    {id: "c3", initial: 0},
    {id: "c2", initial: 5},
    {id: "c1", initial: 6, min: -5, max: 10},
    {initial: 0, min: -10, max: 10},
];

const cart = [
    {id: 1, name: "Constructor Lego", price: 300},
    {id: 2, name: "Train Station", price: 200},
    {id: 3, name: "Hot Wheels Track", price: 150},
];

function App() {
    return (
        <div className="App">
            <>
                <h1>Task 1</h1>
                <CountersList counters={counters}/>

                <h1>Task 2</h1>
                <Cart cart={cart}/>
            </>
        </div>
    );
}

export default App;
