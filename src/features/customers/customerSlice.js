import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
// Reducer tidak diizinkan untuk memodifikasi state yang ada dan tidak diizinkan untuk melakukan async logic
// Reducer hanya untuk menenmpatkan logika sebanyak mungkin
// Action dulu ditulis dengan huruf besar, sekarang jadi account/deposit

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return { ...state, fullName: action.payload };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return { type: "customer/createCustomer", payload: { fullName, nationalID, createdAt: new Date().toISOString() } };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare: (fullName, nationalID) => ({
        payload: {
          fullName,
          nationalID,
          createdAt: new Date().toISOString(),
        },
      }),
      reducer: (state, action) => {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName: (state, action) => {
      state.fullName = action.payload;
    },
  },
});

export default customerSlice.reducer;

export const { createCustomer, updateName } = customerSlice.actions;
