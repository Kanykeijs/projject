import { Box, Grid } from "@mui/material";
import React from "react";
import ProductsList from "../components/Products/ProductsList";
import SideBar from "../components/Products/SideBar";

const ProductsPage = () => {
  return (
    <Box p={5}>
      ProductsPage
      <Grid
        // sx={{ backgroundColor: "black", height: "100vh" }}
        container
        spacing={3}
      >
        <ProductsList />
        <SideBar />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
