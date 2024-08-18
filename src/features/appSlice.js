import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    selectedDate: null,
    selectedSlot: "",
    selectedTable: null,
    userInfo: {
      name: "",
      phone: "",
      email: ""
    }
  },
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setSlot(state, action) {
      state.selectedSlot = action.payload;
    },
    setSelectedTable(state, action) {
      state.selectedTable = action.payload;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    }
  }
});

export const { setSelectedDate, setSlot, setSelectedTable, setUserInfo } = appSlice.actions;
export default appSlice.reducer;
