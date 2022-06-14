import axios from "../config/axios";
export const createUser = async (input) => {
  const res = await axios.post("/auth/signup", input);
  return res;
};
export const signInUser = async (input) => {
  const res = await axios.post("/auth/signin", input);
  return res;
};
export const getUser = async () => {
  const res = await axios.get("/auth"); //this for test
  return res;
};
