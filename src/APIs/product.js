import axios from "../config/axios";
// export const CreatePost = async (title, image) => {
//   const formData = new FormData();
//   formData.append("title", title); // Name string  , Value from att
//   formData.append("image", image);
//   const res = await axios.post("/post", formData);
//   return console.log(res);
// };
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
