import axios from "axios";
import { GET_USER, GET_USER_BY_ID } from "../constants/actionsType";

export const getUsers = () => (dispatch) => {
  axios
    .get("/api/users")
    .then((res) => dispatch({ type: GET_USER, payload: res.data }))
    .catch((err) => console.log(err));
};

export const getUserById = (id) => (dispatch) => {
  axios
    .get(`/api/users/${id}`)
    .then((res) => dispatch({ type: GET_USER_BY_ID, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addUser = (newUser) => (dispatch) => {
  axios
    .post("/api/users", newUser)
    .then(() => dispatch(getUsers()))
    .catch((err) => console.log(err));
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/api/users/${id}`)
    .then(() => dispatch(getUsers()))
    .catch((err) => console.log(err));
};

export const editUserById = (id, editUser) => (dispatch) => {
  axios
    .put(`/api/users/${id}`, editUser)
    .then(() => dispatch(getUsers()))
    .catch((err) => console.log(err));
};
