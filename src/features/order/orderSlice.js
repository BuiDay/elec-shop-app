import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import orderService from "./orderService";


const initialState = {
    order:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const cashOrder = createAsyncThunk("order/cash-order",async(thunkAPI)=>{
    try{
        return await orderService.cashOrder(
            {
                "COD":true,
                "couponApplied":true
            }
        )
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})


export const getOrder = createAsyncThunk("order/get-order",async(thunkAPI)=>{
    try{
        return await orderService.getOrder()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})



export const resetState = createAction("Reset_all")

export const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(cashOrder.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(cashOrder.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(cashOrder.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(getOrder.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getOrder.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.order = action.payload.data
        })
        .addCase(getOrder.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(resetState,()=>initialState)
    },
})

export default orderSlice.reducer;