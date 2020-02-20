import { ADD_TWEET } from "../utils/constants";
import { DELETE_TWEET } from "../utils/constants";

//Acción para poder modificar el estado de los tweets
export const addTweetAction = state => {
  return {
    type: ADD_TWEET,
    payload: state
  };
};

//Acción para poder eliminar un tweet
export const deleteTweetAction = id => {
  return {
    type: DELETE_TWEET,
    payload: id
  };
};
