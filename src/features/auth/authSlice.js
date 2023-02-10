import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserFormLocalStorage = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")) : null

const initialState = {
    user:getUserFormLocalStorage,
    isLoggedIn: false,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const login = createAsyncThunk("auth/login",async(user,thunkAPI)=>{
    try{
        return await authService.login(user)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const logout = createAsyncThunk("auth/logout",async(thunkAPI)=>{
    try{
        return await authService.logout()
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const registerUser = createAsyncThunk("auth/register",async(user,thunkAPI)=>{
    try{
        return await authService.registerUser(user)
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const resetState = createAction("Reset_all")

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(login.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload.data;
            state.isLoggedIn = true;
            localStorage.setItem("isLoggedIn",JSON.stringify(state.isLoggedIn));
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isLoggedIn = false;
            state.isError = true;
            state.message = "Rejected";
            state.user = null
            localStorage.setItem("isLoggedIn",JSON.stringify(state.isLoggedIn));
        })
        .addCase(logout.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(logout.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = null;
            state.isLoggedIn = false;
            localStorage.setItem("isLoggedIn",JSON.stringify(state.isLoggedIn));
        })
        .addCase(logout.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isLoggedIn = true;
            state.isError = true;
            state.message = "Rejected";
            localStorage.setItem("isLoggedIn",JSON.stringify(state.isLoggedIn));
        })

        .addCase(registerUser.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = false;
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isLoggedIn = false;
            state.isError = true;
            state.message = "Rejected";
        })

        .addCase(resetState,()=>initialState)
    },
})

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;