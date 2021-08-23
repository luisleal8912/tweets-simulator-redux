import { combineReducers } from "redux";
import modalsReducers from "./modalsReducers";
import valdationReducers from "./validationsReducers";
import tweetsReducers from "./tweetsReducers";

export default combineReducers({
  modals: modalsReducers,
  validations: valdationReducers,
  tweets: tweetsReducers,
});
