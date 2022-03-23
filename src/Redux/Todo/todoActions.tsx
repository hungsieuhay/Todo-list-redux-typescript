import { Todo } from "../../types";
import { actionTypes } from "./actionTypes";

export const addTodo = (payload: Todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload,
  };
};

export const removeTodo = (id: string) => {
  return {
    type: actionTypes.REMOVE_TODO,
    payload: id,
  };
};

export const editTodo = (payload: Todo) => {
  return {
    type: actionTypes.EDIT_TODO,
    payload,
  };
};

export const updateTodo = (payload: Todo) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload,
  };
}

export const changeTodoUpdate = (index: number) => {
  return {
    type: actionTypes.CHANGE_TODO_STATUS,
    payload: index,
  }
}