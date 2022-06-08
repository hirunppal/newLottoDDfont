import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../APIs/userauth";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessTOken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchme = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get("/index");
          // console.log(resMe.data.user);
          await setUser(resMe.data.user);
          console.log(user);
        }
      } catch (err) {
        console.log("User Auth fail");
      }
    };
    fetchme();
  }, []);

  const signUp = async (input) => {
    const res = await createUser(input);
    setAccessToken(res.data.token);
    console.log(res);
    // const resMe = await axios.get("/me");
    // // console.log(resMe.data.user);
    // setUser(resMe.data.user);
    navigate("/");
  };
  const login = async (emailOrPhone, password) => {
    const res = await axios.post("/user/login", {
      emailOrPhone,
      password,
    });
    setAccessToken(res.data.token);
    if (res.data.token) {
      const resMe = await axios.get("/me");
      setUser(resMe.data.user);
    }
  };
  const logouted = () => {
    // console.log("BYE");
    removeAccessTOken();
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        logouted,
        signUp,
        setUser,
        user,
        // useAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export { AuthContext, AuthContextProvider, useAuth };
