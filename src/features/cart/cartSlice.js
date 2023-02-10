import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import cartService from "./cartService";


const initialState = {
    carts:localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
    addCarts:[],
    totalQuantity:localStorage.getItem("totalQuantity")
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : "",
    cartTotalAmount:localStorage.getItem("cartTotalAmount")
    ? JSON.parse(localStorage.getItem("cartTotalAmount"))
    : "",
    totalAfterDiscount:"",
    getcart:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const addCart = createAsyncThunk("user/add-cart",async(data,thunkAPI)=>{
    let tempCart;
    tempCart={
        data:data,
        quantity:1
    }
    return tempCart
})

export const creCart =  createAsyncThunk("user/cre-cart",async(id,thunkAPI)=>{
    return id
})

export const desCart =  createAsyncThunk("user/desc-cart",async(id,thunkAPI)=>{
    return id
})

export const removeCart =  createAsyncThunk("user/remove-cart",async(id,thunkAPI)=>{
    return id
})

export const addCartApi = createAsyncThunk("product/add-cart-api",async(id,thunkAPI)=>{
    try{
        return await cartService.addCartApi(id)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const getCartApi = createAsyncThunk("product/get-cart-api",async(thunkAPI)=>{
    try{
        return await cartService.getcartApi()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const applyCoupon = createAsyncThunk("product/apply-coupon",async(data,thunkAPI)=>{
    try{
        return await cartService.applyCoupon(data)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})


export const resetState = createAction("Reset_all")

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(addCart.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(addCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            const productIndex = state?.carts?.findIndex(
                (item) => item._id === action.payload.data._id
              );
              if (productIndex >= 0) {
                state.carts[productIndex].quantity += 1;
              } 
              else {
                const tempProduct = { ...action.payload.data, quantity: 1 };
                state.carts.push(tempProduct);
                }
                //////////////////////
                const array = [];
                state.carts.map((item) => {
                    const { quantity } = item;
                    const totalquantity = quantity;
                    return array.push(totalquantity);
                });
                const totalQuantity = array.reduce((a, b) => {
                    return a + b;
                }, 0);
                state.totalQuantity = totalQuantity;
                /////////////////////////
                const array2 = [];
                state.carts.map((item) => {
                    const {quantity} = item;
                    const {price} = item
                    const cartItemAmount = price * quantity;
                    return array2.push(cartItemAmount);
                });
                const totalAmount = array2.reduce((a, b) => {
                    return a + b;
                }, 0);
                state.cartTotalAmount = totalAmount;
                localStorage.setItem("carts", JSON.stringify(state.carts));
                localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
                localStorage.setItem("cartTotalAmount", JSON.stringify(state.cartTotalAmount));
        })
        .addCase(addCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(creCart.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(creCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            const productIndex = state?.carts?.findIndex(
                (item) => item._id === action.payload._id
              );
              if (productIndex >= 0) {
                state.carts[productIndex].quantity += 1;
              } 
               //////////////////////
               const array = [];
               state.carts.map((item) => {
                   const { quantity } = item;
                   const totalquantity = quantity;
                   return array.push(totalquantity);
               });
               const totalQuantity = array.reduce((a, b) => {
                   return a + b;
               }, 0);
               state.totalQuantity = totalQuantity;
               /////////////////////////
               const array2 = [];
               state.carts.map((item) => {
                   const {quantity} = item;
                   const {price} = item
                   const cartItemAmount = price * quantity;
                   return array2.push(cartItemAmount);
               });
               const totalAmount = array2.reduce((a, b) => {
                   return a + b;
               }, 0);
               state.cartTotalAmount = totalAmount;
               localStorage.setItem("carts", JSON.stringify(state.carts));
               localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
                localStorage.setItem("cartTotalAmount", JSON.stringify(state.cartTotalAmount));
        })
        .addCase(creCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(desCart.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(desCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            const productIndex = state?.carts?.findIndex(
                (item) => item._id === action.payload._id
              );
              if (productIndex >= 0) {
                state.carts[productIndex].quantity -= 1;
              } 
               //////////////////////
               const array = [];
               state.carts.map((item) => {
                   const { quantity } = item;
                   const totalquantity = quantity;
                   return array.push(totalquantity);
               });
               const totalQuantity = array.reduce((a, b) => {
                   return a + b;
               }, 0);
               state.totalQuantity = totalQuantity;
               /////////////////////////
               const array2 = [];
               state.carts.map((item) => {
                   const {quantity} = item;
                   const {price} = item
                   const cartItemAmount = price * quantity;
                   return array2.push(cartItemAmount);
               });
               const totalAmount = array2.reduce((a, b) => {
                   return a + b;
               }, 0);
               state.cartTotalAmount = totalAmount;
               localStorage.setItem("carts", JSON.stringify(state.carts));
        })
        .addCase(desCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(removeCart.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(removeCart.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            const newCartItem = state.carts.filter(
            (item) => item._id !== action.payload._id
            );
            state.carts = newCartItem;

            const array = [];
               state.carts.map((item) => {
                   const { quantity } = item;
                   const totalquantity = quantity;
                   return array.push(totalquantity);
               });
               const totalQuantity = array.reduce((a, b) => {
                   return a + b;
               }, 0);
               state.totalQuantity = totalQuantity;
               /////////////////////////
               const array2 = [];
               state.carts.map((item) => {
                   const {quantity} = item;
                   const {price} = item
                   const cartItemAmount = price * quantity;
                   return array2.push(cartItemAmount);
               });
               const totalAmount = array2.reduce((a, b) => {
                   return a + b;
               }, 0);
               state.cartTotalAmount = totalAmount;
            
            localStorage.setItem("carts", JSON.stringify(state.carts));
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
            localStorage.setItem("cartTotalAmount", JSON.stringify(state.cartTotalAmount));
        })
        .addCase(removeCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })
        
        .addCase(addCartApi.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(addCartApi.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.addCarts = action.payload
        })
        .addCase(addCartApi.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(getCartApi.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getCartApi.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.getcart = action.payload.data
        })
        .addCase(getCartApi.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(applyCoupon.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(applyCoupon.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.totalAfterDiscount = action.payload
        })
        .addCase(applyCoupon.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(resetState,()=>initialState)
    },
})

export default cartSlice.reducer;