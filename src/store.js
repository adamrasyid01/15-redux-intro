import { combineReducers, createStore } from "redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// Daftarin Reducer ke rootReducer, nanti rootReducer yang akan kita daftarkan ke store
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
