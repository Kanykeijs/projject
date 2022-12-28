import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const EditProduct = () => {
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, saveEditedProduct } = useProducts();

  const [product, setProduct] = useState(oneProduct);

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  console.log(product);

  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Name"
        name="name"
        id="outlined-basic"
        value={product.name || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Description"
        name="description"
        id="outlined-basic"
        value={product.description || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Price"
        name="price"
        id="outlined-basic"
        value={product.price || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Picture"
        name="picture"
        id="outlined-basic"
        value={product.picture || ""}
        onChange={handleInp}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Type"
        name="type"
        id="outlined-basic"
        value={product.type || ""}
        onChange={handleInp}
      />
      <Button
        onClick={() => {
          saveEditedProduct(id, product);
          navigate(-1);
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        Edit Product
      </Button>
    </Box>
  );
};

export default EditProduct;
