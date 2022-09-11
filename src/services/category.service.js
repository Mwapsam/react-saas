import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getCategories = createAsyncThunk(
  'categories/getProducts',
  async () => {
    const getCategory = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/categories`);
    const res = await getCategory.data;
    return res;
  },
);

export const createCategories = createAsyncThunk(
  'categories/createCategories',
  async (category) => {
    const createProduct = await axios.post(`${process.env.REACT_APP_SERVER}/api/v1/categories`, category);
    const res = await createProduct.data;
    return res;
  },
);

export default getCategories;
