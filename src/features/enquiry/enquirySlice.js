import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import EnqService from "./enquiryService";

const initialState = {
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const createEnq = createAsyncThunk("enquiry/create-enquiry",async(data,thunkAPI)=>{
    try{
        return await EnqService.createEnq(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const resetState = createAction("Reset_all")

export const enquirySlice = createSlice({
    name:"enquiry",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(createEnq.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createEnq.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(createEnq.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(resetState,()=>initialState)
    },
})

export default enquirySlice.reducer;