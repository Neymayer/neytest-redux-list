import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const Slice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      let playersArray = action.payload;
      state.value = playersArray;
    },
    addToFormation: (state, action) => {
      let name = action.payload;
      let newPlayer = { name: name };
      state.value = [...state.value, newPlayer];
    },
    removeFromFormation: (state, action) => {
      let singlePlayer = action.payload;
      state.value = state.value.filter((x) => x.name !== singlePlayer.name);
    },
  },
});

export const { setPlayers, addToFormation, removeFromFormation } =
  Slice.actions;

export default Slice.reducer;
