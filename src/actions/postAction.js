import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "./types";
import axios from "axios";

// get all posts
export const getPosts = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: GET_POSTS,
    payload: result.data,
  });
};

// get a post
export const getPost = (id) => async (dispatch) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  dispatch({
    type: GET_POST,
    payload: result.data,
  });
};

// create a post
export const createPost = (post) => async (dispatch) => {
  const result = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );

  dispatch({
    type: CREATE_POST,
    payload: result.data,
  });
};

// update a post
export const updatePost = (post) => async (dispatch) => {
  const result = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    post
  );
  dispatch({
    type: UPDATE_POST,
    payload: result.data,
  });
};

// delete a post
export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  dispatch({
    type: DELETE_POST,
    payload: id,
  });
};
