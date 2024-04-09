import { useReducer } from "react";

export const initialState = {
  status: "loginCard",
  userName: null,
  password: null,
  name: null,
  surname: null,
  age: null,
  email: null,
  user: null,
  userId: null,
};
export const registerReducer = (state, action) => {
  switch (action.type) {
    case "userName":
      return { ...state, userName: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "userId":
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};
export const useFormState = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  return [state, dispatch];
};
