import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import "./Product.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));

const Product = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.image}
        title={props.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant='subtitle1' color='textSecondary'>
            {props.title}
          </Typography>
          <Typography component='h5' variant='h5'>
            KZT {props.price}
          </Typography>
        </CardContent>
      </div>
      <Button size='small' className='card_order'>
        {" "}
        <AddShoppingCart /> Add to card
      </Button>
    </Card>
  );
};

export default Product;
