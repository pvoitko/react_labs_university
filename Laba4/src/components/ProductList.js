import {useState, useEffect} from "react";
import Paper from '@mui/material/Paper';
import {ItemCard} from './Card'

export function ProductList(props) {
    const { dataURL } = props
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(dataURL)
            .then((response) => response.json())
            .then((responseJson) => setData(responseJson))
            .catch((error) => {
                console.error(error)
            });
    }, [dataURL]);

    const getFavourites = () => {
        return JSON.parse(localStorage.getItem('favourites')) || [];
    }
    const setFavourites = (favourites) => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }
    const addToFavourites = (item) => {
        let favourites = [...getFavourites(), item];
        setFavourites(favourites);
    }
    const removeFromFavourites = (item) => {
        let favourites = getFavourites().filter((favourite) => favourite.id !== item.id);
        setFavourites(favourites);
    }
    const isFavourite = (item) => {
        return getFavourites().some((favourite) => favourite.id === item.id);
    }

    return (
        <Paper id="Paper" sx={{mt:5}}>
            {
                data.map(item =>
                    <ItemCard key={item.id} item={item} isFavourite={isFavourite}
                              addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites}
                    />)
            }
        </Paper>
    )
}