import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
import validationsReducer from "./validationsReducer";
import tweetsReducer from "./tweetsReducer";

//Engloba todos los reducers de la aplicación
export default combineReducers({
  modals: modalsReducer,
  validation: validationsReducer,
  tweets: tweetsReducer
});
