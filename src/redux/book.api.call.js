import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBookData = createAsyncThunk("book/fetch", async () => {
  const response = await axios.get("https://ghibliapi.herokuapp.com/films/");
  return response.data;
})