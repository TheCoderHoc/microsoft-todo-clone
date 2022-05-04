import { createStore } from "redux";
import tasksReducer from "./reducers/tasks.reducer";

const store = createStore(tasksReducer);

export default store;
