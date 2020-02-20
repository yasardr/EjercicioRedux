import { VALIDATION_FORM_ADD_TWEET } from "../utils/constants";

//Acción para poder modificar el estado del formulario
export const validationFormAddTweetAction = state => {
  return {
    type: VALIDATION_FORM_ADD_TWEET,
    payload: state
  };
};
