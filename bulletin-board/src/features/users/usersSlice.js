import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ramesh" },
  { id: "1", name: "Aaryn" },
  { id: "2", name: "John Doe" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
