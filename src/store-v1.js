import { combineReducers, createStore } from "redux";
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
// Reducer tidak diizinkan untuk memodifikasi state yang ada dan tidak diizinkan untuk melakukan async logic
// Reducer hanya untuk menenmpatkan logika sebanyak mungkin
// Action dulu ditulis dengan huruf besar, sekarang jadi account/deposit
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

// Daftarin Reducer ke rootReducer, nanti rootReducer yang akan kita daftarkan ke store
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

function payLoan() {
  return { type: "account/payLoan" };
}

function createCustomer(fullName, nationalID) {
  return { type: "customer/createCustomer", payload: { fullName, nationalID, createdAt: new Date().toISOString() } };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("John Doe", "123456789"));
store.dispatch(deposit(1000));
store.dispatch(requestLoan(5000, "Beli mobil"));
store.dispatch(payLoan());
store.dispatch(updateName("John Smith"));
