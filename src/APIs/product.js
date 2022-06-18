import axios from "../config/axios";

export const getallProducts = async () => {
  const res = await axios.get("/search");
  // console.log(res.data);
  return res.data;
};
export const getcartProduct = async (id) => {
  const res = await axios.get("/cartfetch/" + id);
  return res.data;
};
export const createOrderbyCart = async (carts) => {
  const res = await axios.post("/od/createOrder", { cartItems: carts });
  return res.data;
};

export const getQrcode = async (id) => {
  const res = await axios.get("/od/Qr/" + id);
  return res.data;
};
