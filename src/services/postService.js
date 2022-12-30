import Axios from "./axiosConfig";

export function getPosts() {
  return Axios.get("/posts");
}

export function getPost(id) {
  return Axios.get(`/posts/${id}`);
}
