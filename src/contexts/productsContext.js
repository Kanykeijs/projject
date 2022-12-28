import { TextField } from "@mui/material";
import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productsContext = createContext();

export const useProducts = () => {
  return useContext(productsContext);
};

const INIT_STATE = {
  products: [],
  oneProduct: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      let { data } = await axios(
        `${JSON_API_PRODUCTS}${window.location.search}`
      );
      let action = {
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      await axios.post(JSON_API_PRODUCTS, newProduct);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditedProduct = async (id, newProduct) => {
    try {
      await axios.patch(`${JSON_API_PRODUCTS}/${id}`, newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const getOneProduct = async (id) => {
    try {
      const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
      let action = {
        type: ACTIONS.GET_ONE_PRODUCT,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const editOneProduct = async (id, newObj) => {
    try {
      const { data } = await axios.patch(`${JSON_API_PRODUCTS}/${id}`, newObj);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  let values = {
    products: state.products,
    oneProduct: state.oneProduct,
    editOneProduct,
    addProduct,
    getProducts,
    getOneProduct,
    deleteProduct,
    saveEditedProduct,
    fetchByParams,
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
