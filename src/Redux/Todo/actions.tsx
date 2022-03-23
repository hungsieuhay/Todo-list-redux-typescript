import { Todo } from "../../types";
import { actionTypes } from "./actionTypes";


interface changeTodoStatus {
  type: actionTypes.CHANGE_TODO_STATUS
  payload: number
}

interface addTodo {
  type: actionTypes.ADD_TODO,
  payload: Todo
}

interface removeTodo {
  type: actionTypes.REMOVE_TODO,
  payload: string
}

interface editTodo {
  type: actionTypes.EDIT_TODO,
  payload: Todo
}

interface updateTodo {
  type: actionTypes.UPDATE_TODO,
  payload: Todo
}

export type Action = addTodo | removeTodo | editTodo | updateTodo | changeTodoStatus