import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../features/auth/authSlice"


const getIsLogin= localStorage.getItem("isLoggedIn")
        ? JSON.parse(localStorage.getItem("isLoggedIn")) : null

const ShowOnLogin = ({ children }) => {
  const isLoggedIn = getIsLogin;

  if (isLoggedIn) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = getIsLogin;

  if (!isLoggedIn) {
    return children;
  }
  return null;
};

export default ShowOnLogin;
