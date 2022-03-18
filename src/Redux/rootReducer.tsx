import todoReducer from "./Todo/todoReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  todo: todoReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
