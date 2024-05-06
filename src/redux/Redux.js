import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) { // You need to access action.type to switch on it
    case "increment":
      return {
        ...state,
        value: state.value + 1,
      };
    case "decrement":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: appReducer,
});

export default store;
