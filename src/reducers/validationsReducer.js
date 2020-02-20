import { VALIDATION_FORM_ADD_TWEET } from "../utils/constants";

const initialProps = {
  errorFormAddTweet: false
};

//Funcion para modificar el estado del formulario
export default function(state = initialProps, action) {
  switch (action.type) {
    case VALIDATION_FORM_ADD_TWEET:
      return {
        ...state,
        errorFormAddTweet: action.payload
      };

    default:
      return state;
  }
}
