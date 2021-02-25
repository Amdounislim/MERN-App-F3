import axios from "axios";
import { GET_USER } from "../constants/actionsType";

export const getUsers = () => (dispatch) => {
  axios
    .get("/api/users")
    .then((res) => dispatch({ type: GET_USER, payload: res.data }))
    .catch((err) => console.log(err));
};
