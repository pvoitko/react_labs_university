import { useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CardActionArea } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export function ItemCard(props) 
{
    const {item, isFavourite, addToFavourites, removeFromFavourites} = props
    const {id, title, price, category, description, image} = item
    
    const cart = useRef(null);
    const [cartIcon, setCartIcon] = useState(<ShoppingCartOutlinedIcon />)

    const favourite = useRef(null);
    const [favouriteIcon, setFavouriteIcon] = useState(
        isFavourite(item) ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />);

    const onButtonClick = () => {
        setCartIcon(<ShoppingCartIcon />)
    };

    const handleFavourite = () => {
        console.log(isFavourite(item))
        if (isFavourite(item)) {
            removeFromFavourites(item)
            setFavouriteIcon(<FavoriteBorderOutlinedIcon />)
        } else {
            addToFavourites(item)
            setFavouriteIcon(<FavoriteOutlinedIcon />)
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }} justifyContent="space-between">
            <CardActionArea onClick={onButtonClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                />
                <CardContent key={id}>
                    <Typography gutterBottom variant="h5" component="div">
                    {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton ref={cart} aria-label="add to cart">
                    {cartIcon}
                </IconButton>
                <IconButton ref={favourite} aria-label="add to favorites" onClick={handleFavourite}>
                    {favouriteIcon}
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                {category}
                </Typography>
            </CardActions>
        </Card>
    );
}