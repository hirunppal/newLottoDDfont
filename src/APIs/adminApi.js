import axios from "../config/axios";
import { getModsToken } from "../services/localStorage";

export const adminAuthorization = async ({ emailOrPhone, password }) => {
  const res = await axios.post("/admin/authentication/signin", {
    emailOrPhone,
    password,
  });
  return res.data;
};
export const getMod = async () => {
  const res = await axios.get("/admin/authentication");
  return res;
};
export const getallSellerxProduct = async () => {
  const res = await axios.get("/search");
  return res.data;
};
export const getOneseller = async (id) => {
  const res = await axios.get("/admin/seller/" + id);
  return res.data;
};
// export const createOrderbyCart = async (carts) => {
//   const res = await axios.post("/od/createOrder", { cartItems: carts });
//   return res.data;
// };
export const CreateProducts = async (id, reqbody) => {
  const res = await axios.post("/admin/seller/" + id, reqbody);
  return res.data;
};
