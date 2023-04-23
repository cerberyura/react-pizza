import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchPizzasArgs, Pizza} from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasArgs>('pizza/fetchBPizzasStatus', async (params: FetchPizzasArgs) => {
    const {sortBy, order, category, search, currentPage} = params
    const {data} = await axios.get<Pizza[]>(`https://640a6cbc65d3a01f98fecb0f.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    return data as Pizza[];
})