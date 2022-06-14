import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, getUser, signInUser } from "../APIs/userauth";
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
          const resMe = await getUser();
          // console.log(resMe.data.user);
          setUser(resMe.data.user);
          // console.log(user);
        }
      } catch (err) {
        console.log("User Autoriztion fail");
      }
    };
    fetchme();
  }, []);

  const signUp = async (input) => {
    const res = await createUser(input);
    setAccessToken(res.data.token);
    // console.log(res);
    const resMe = await getUser();
    setUser(resMe.data.user);
  };
  const signIn = async (input) => {
    const res = await signInUser(input);
    setAccessToken(res.data.token);
    if (res.data.token) {
      const resMe = await getUser();
      setUser(resMe.data.user);
    }
  };
  const SignOut = () => {
    removeAccessTOken();
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        signIn,
        SignOut,
        signUp,
        setUser,
        user,
        // showModal,
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
