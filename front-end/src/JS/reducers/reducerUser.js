import { GET_USER } from "../constants/actionsType";

const intialState = {
  users: [],
};

const reducerUser = (state = intialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default reducerUser
