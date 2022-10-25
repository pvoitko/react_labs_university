import './App.css';
import Function from "./components/funcomponent";
import Cities from "./components/Cities";
import Color from "./components/Color";
import Exercise4 from "./components/EX4";

let cities = [
    {id: 1, name: "Chicago", image: 'chicago.jpg'},
    {id: 2, name: "Los Angeles", image: 'los-angeles.jpg'},
    {id: 3, name: "New York", image: 'new-york.jpg'},
    {id: 4, name: "Zhytomyr", image: 'zt.jpg'},
    {id: 5, name: "Odessa", image: 'odessa.jpg'}
]

function App() {
    return (
        <div className="App">
            <h1>Table</h1>
            <table>
                <tr>
                    <th>First Name</th>
                    <td>John</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>Silver</td>
                </tr>
                <tr>
                    <th>Occupation</th>
                    <td>Pirate Captain</td>
                </tr>
            </table>

            <h1>Function Component</h1>
            <Function/>

            <h1>Cities</h1>
            <Cities cities={cities} />

            <h1>Colors</h1>
            <Color />


            <Exercise4 />
        </div>
    );
}

export default App;
