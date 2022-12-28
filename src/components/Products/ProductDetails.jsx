import { Box, Button } from "@mui/material";
import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useProducts();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  //console.log(oneProduct);

  return (
    <Paper sx={{ m: 3 }} elevation={24}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={oneProduct.picture} alt="" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">{oneProduct.name}</Typography>
          <Typography variant="subtitle1">{oneProduct.type}</Typography>
          <Typography variant="caption">{oneProduct.price}$</Typography>
          <Typography variant="caption">{oneProduct.description}</Typography>
          <Box>
            <Button>Добавить в корзину</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
