import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// Daftarin Reducer ke rootReducer, nanti rootReducer yang akan kita daftarkan ke store
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
