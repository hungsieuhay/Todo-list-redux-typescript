import classnames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as action from "../../../../Redux/Todo/todoActions";
import { Todo } from '../../../../types';
import "./TodoList.scss";

interface TodoListProps {
  todo: Array<Todo>;
  onTodoClick: (todo: Todo, index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todo, onTodoClick }) => {
  const dispatch = useDispatch();
  const handleTodoClick = (todo: Todo, index: number) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index)
  }

  const handleDelete = (id: string) => {
    dispatch(action.removeTodo(id));
  };

  const handleEdit = (todo: Todo) => {
    dispatch(action.editTodo(todo));
  };

  return (
    <ul className="todo-list">
      {todo.map((x, index) => (
        <div key={index}>
          <li
            className={classnames({
              'todo-item': true,
              completed: x.status === "completed",
            })}
            onClick={() => handleTodoClick(x, index)}
          >
            {x.city}
          </li>
          <button onClick={() => handleDelete(x.id)}>DELETE</button>
          <button onClick={() => handleEdit(x)}>EDIT</button>
        </div>
      ))}
    </ul>
  )
}

export default TodoList
