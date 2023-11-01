import userReducer from "./user";
import userlistReducer from "./userlist"
const rootReducers = {
  user: userReducer,
  userlist: userlistReducer,
};
export default rootReducers;
