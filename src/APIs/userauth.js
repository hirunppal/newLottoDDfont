import axios from "../config/axios";
export const createUser = async (input) => {
  const res = await axios.post("/auth/signup", input);
  return res;
};
export const deleteLike = async (postid) => {
  const res = await axios.patch("/post/" + postid + "/unlike");
  return res;
};
