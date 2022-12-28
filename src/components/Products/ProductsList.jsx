import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, products } = useProducts();

  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    console.log(p);
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage; //0
    const end = begin + itemsPerPage; //5
    return products.slice(begin, end);
  }

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Grid
      item
      md={9}
      sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "40vh",
          gap: "10px",
        }}
      >
        {products.length > 0 ? (
          currentData().map((item) => <ProductCard item={item} key={item.id} />)
        ) : (
          <>
            <CircularProgress color="inherit" />
          </>
        )}
      </Box>
      <Pagination
        sx={{ m: 2 }}
        count={count}
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
    </Grid>
  );
};

export default ProductsList;
