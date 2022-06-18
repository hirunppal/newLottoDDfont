import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, getUser, signInUser } from "../APIs/userauth";
import {
  getAccessToken,
  getModsToken,
  removeAccessTOken,
  removeModsTOken,
  setAccessToken,
  setModsToken,
} from "../services/localStorage";
import {
  getOneseller,
  CreateProducts,
  getMod,
  adminAuthorization,
} from "../APIs/adminApi";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const [mod, setMod] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchme = async () => {
      try {
        const token = getModsToken();
        if (token) {
          const resMe = await getMod();
          console.log(resMe);
          setMod(resMe.data.mod);
        }
      } catch (err) {
        console.log("Mod Autoriztion fail");
      }
    };
    fetchme();
  }, []);

  const Signin = async (input) => {
    const res = await adminAuthorization(input);
    // console.log(res);
    setModsToken(res.token);
    const resMe = await getMod();
    setMod(resMe.data.mod);
  };
  const SignOut = () => {
    removeModsTOken();
    setMod(null);
  };
  const ModFetchProduct = async () => {
    const res = await axios.get("/admin/allseller");
    return res.data;
  };
  const ModgetSeller = async (id) => {
    const seller = await getOneseller(id);
    return seller;
  };
  const ModaddProducts = async (products, id, email) => {
    const reqbody = {
      products: products,
      email,
    };
    console.log(reqbody);
    const res = await CreateProducts(id, reqbody);
    // console.log(res);
    return res;
  };
  return (
    <AdminContext.Provider
      value={{
        Signin,
        SignOut,
        ModFetchProduct,
        ModgetSeller,
        ModaddProducts,
        mod,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
const useAdmin = () => {
  const ctx = useContext(AdminContext);
  return ctx;
};

export { AdminContext, AdminContextProvider, useAdmin };
