import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3000/data";

export const getProducts = createAsyncThunk(
  "todos/getProducts",
  async function () {
    try {
      let response = await axios.get(api);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
