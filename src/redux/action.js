import { failed, loading, success } from "../constantsts";
import axios from "axios";

export const changeNumber = (x) => (dispatch, getState) => {
  dispatch({ type: "changeNumber", payload: getState().number + x });
};

export const getdata = (x) => async (dispatch, getState) => {
  dispatch({
    type: loading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: success,
      payload: { data: [...data], error: "", loading: false },
    });
    localStorage.setItem("posts", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: failed,
      payload: { data: [], error: error.message, loading: false },
    });
  }
};

export const changeTitle = (index, text) => (dispatch, getState) => {
  const posts = JSON.parse(JSON.stringify(getState().posts.data));
  posts[index].title = text;
  localStorage.setItem("posts", JSON.stringify(posts));
  dispatch({
    type: "changeTitle",
    payload: { loading: false, error: "", data: [...posts] },
  });
};
