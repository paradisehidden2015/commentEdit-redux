import { failed, loading, success } from "../constantsts";
export const numberReducer = (store = 0, { type, payload }) => {
  switch (type) {
    case "changeNumber":
      return payload;
    default:
      return store;
  }
};
export const posts = (
  store = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case loading:
      return payload;
    case success:
      return payload;
    case failed:
      return payload;
    case "changeTitle":
      return payload;
    default:
      return store;
  }
};
