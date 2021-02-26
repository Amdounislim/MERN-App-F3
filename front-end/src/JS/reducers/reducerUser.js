import { GET_USER, GET_USER_BY_ID } from "../constants/actionsType";

const intialState = {
  users: [],
  userById:{}
};

const reducerUser = (state = intialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, users: action.payload };
    
    case GET_USER_BY_ID:
      return {...state, userById:action.payload[0]}

    default:
      return state;
  }
};

export default reducerUser
