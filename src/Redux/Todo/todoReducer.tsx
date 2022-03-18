import { initialTodoList } from "../../todo";
import { Todo } from "../../types";
import { Action } from "./actions";
import { actionTypes } from "./actionTypes";

interface TodoState {
  todos: Todo[],
  isAdd: boolean,
  todoUpdated: Todo
}

const initialState: TodoState = {
  todos: initialTodoList,
  isAdd: true,
  todoUpdated: { id: "", city: "", status: "" }
}

const todoReducer = (state: TodoState = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case actionTypes.EDIT_TODO:
      return {
        ...state,
        isAdd: false,
        todoUpdated: action.payload,
      };
    case actionTypes.UPDATE_TODO:
      const list = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload };
        }
        return todo;
      });
      return {
        ...state,
        todos: [...list],
        isAdd: true,
      };
    case actionTypes.CHANGE_TODO_STATUS:
      const newTodoList: Array<Todo> = [...state.todos]

      const newTodo: Todo = {
        ...newTodoList[action.payload],
        status: newTodoList[action.payload].status === 'completed' ? 'new' : 'completed',
      }

      newTodoList[action.payload] = newTodo
      return { ...state, todos: [...newTodoList] }
    default:
      return state;
  }
}

export default todoReducer

// if(action.type === 'new') {
//   todoWillEdit = todos.map(todo => {
//     if(todo.id === action.payload) {
//       todo.status='completed'
//     }
//     return todo
//   })
//   return { ...state, todos: [...todoWillEdit] }
// }
//    else {
//   todoWillEdit = todos.map(todo => {
//     if(todo.id === action.payload) {
//       todo.status='completed'
//     }
//     return todo
//   })
//   return { ...state, todos: [...todoWillEdit] }
// }