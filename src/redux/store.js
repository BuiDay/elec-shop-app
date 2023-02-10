import { configureStore} from "@reduxjs/toolkit";
import authReducer from "./slice/authSilce";


  const store = configureStore({
    reducer: {
        auth:authReducer
    }
  });
  
  export default store;