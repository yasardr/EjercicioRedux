import { STATE_ADD_TWEET_MODAL } from "../utils/constants";

const initialProps = {
  stateModalAddTweet: false
};

//Funcion para modificar el estado a partir de una accion
export default function(state = initialProps, action) {
  switch (action.type) {
    //Modifica el valor del esatdo del modal
    case STATE_ADD_TWEET_MODAL:
      return {
        ...state,
        stateModalAddTweet: action.payload
      };
    default:
      return state;
  }
}
