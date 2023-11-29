import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalCreateTaskOpen: false,
  isEditTask: undefined,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModalCreateTask(state) {
      state.modalCreateTaskOpen = true;
    },
    closeModalCreateTask(state) {
      state.modalCreateTaskOpen = false;
    },
    setIsEditTask(state, action) {
      state.isEditTask = action.payload;
    },
  },
});

export const modalActions = modalSlice.reducer;
export const { openModalCreateTask, closeModalCreateTask, setIsEditTask } =
  modalSlice.actions;
