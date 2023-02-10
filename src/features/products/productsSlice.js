import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productsService from "./productsService";


const initialState = {
    products:[],
    product:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const getAllProducts = createAsyncThunk("product/get-all",async(params,thunkAPI)=>{
    try{
        return await productsService.getAllProduct(params)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const getAProduct = createAsyncThunk("product/get",async(id,thunkAPI)=>{
    try{
        return await productsService.getAProduct(id)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const ratingAProduct = createAsyncThunk("product/rating",async(value,thunkAPI)=>{
    try{
        return await productsService.ratingAProduct(value)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})


export const resetState = createAction("Reset_all")

export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getAllProducts.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload.data;
        })
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(getAProduct.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getAProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.product = action.payload.data;
        })
        .addCase(getAProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(ratingAProduct.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(ratingAProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.product = action.payload.data;
        })
        .addCase(ratingAProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(resetState,()=>initialState)
    },
})

export default productsSlice.reducer;