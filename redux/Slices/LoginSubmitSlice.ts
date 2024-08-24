import { createSlice } from '@reduxjs/toolkit'

// Function to safely get localStorage item
const getLocalStorageItem = (key: string, defaultValue: any) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key) || defaultValue;
  }
  return defaultValue;
};

const loginSubmit = createSlice({
  name: 'loginSubmit',
  initialState: {
    logged: getLocalStorageItem("logged", false),
    title: getLocalStorageItem("title", ""),
    firstName: getLocalStorageItem("firstName", ""),
    lastName: getLocalStorageItem("lastName", ""),
    email: getLocalStorageItem("email", ""),
    country: getLocalStorageItem("country", ""),
    residence: getLocalStorageItem("residence", ""),
    invitationCode: getLocalStorageItem("invitationCode", ""),
  },
  reducers: {
    Login(state, action) {
      return {
        logged: true,
        title: action.payload.title,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        country: action.payload.country,
        residence: action.payload.residence,
        invitationCode: action.payload.invitationCode,
      };
    },
    Logout(state) {
      if (typeof window !== "undefined") {
        localStorage.clear();
      }
      return {
        logged: false,
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        residence: "",
        invitationCode: "",
      };
    }
  },
});

export const { Login, Logout } = loginSubmit.actions;
export default loginSubmit.reducer;
