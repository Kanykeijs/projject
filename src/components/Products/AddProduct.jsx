import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  console.log(product);

  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <TextField
        value={product.name}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, name: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
      />
      <TextField
        value={product.description}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, description: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
      />
      <TextField
        value={product.price}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, price: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
      />
      <TextField
        value={product.picture}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, picture: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name="picture"
      />
      <TextField
        value={product.type}
        onChange={(e) =>
          setProduct((prev) => ({ ...prev, type: e.target.value }))
        }
        fullWidth
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name="type"
      />
      <Button
        onClick={() => {
          addProduct(product);
          navigate(-1);
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
