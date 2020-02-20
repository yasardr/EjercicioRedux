import { STATE_ADD_TWEET_MODAL } from "../utils/constants";

//Acción para poder modificar el estado del modal
export const openCloseAddTweetModalAction = state => {
  return {
    type: STATE_ADD_TWEET_MODAL,
    payload: state
  };
};
