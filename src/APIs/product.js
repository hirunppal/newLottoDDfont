import axios from "../config/axios";
export const CreatePost = async (title, image) => {
  const formData = new FormData();
  formData.append("title", title); // Name string  , Value from att
  formData.append("image", image);
  const res = await axios.post("/post", formData);
  return console.log(res);
};
export const getallPosts = async () => {
  const res = await axios.get("/me/post");
  // console.log(res);
  return res;
};

//commets method===========commets method=======commets method
export const createComment = async (title, postid) => {
  const res = await axios.post("post/" + postid + "/comment", {
    title,
  });
  // console.log(res);
  return res;
};
export const deleteComment = async (postid, commentId) => {
  const res = await axios.delete("/post/" + postid + "/comment/" + commentId);
  return res;
};
export const deleteLike = async (postid) => {
  const res = await axios.patch("/post/" + postid + "/unlike");
  return res;
};
export const createLike = async (postid) => {
  const res = await axios.patch("/post/" + postid + "/like");
  return res;
};
