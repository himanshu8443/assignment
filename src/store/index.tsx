import { configureStore } from "@reduxjs/toolkit";
import { tasksActions } from "./Tasks.store";
import { modalActions } from "./Modal.store";

const store = configureStore({
  reducer: {
    tasks: tasksActions,
    modal: modalActions,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;
