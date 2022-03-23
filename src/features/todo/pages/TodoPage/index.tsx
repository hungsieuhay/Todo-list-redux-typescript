import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
// import { initialTodoList } from '../../../../todo'
import { Todo } from '../../../../types'
import TodoList from '../../components/TodoList'
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../Redux/rootReducer'
import * as action from "../../../../Redux/Todo/todoActions"
import TodoForm from '../../components/TodoForm';

const TodoPage = () => {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const { todos } = useSelector((state: RootState) => state.todo)

  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    return setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo: Todo, index: number) => {
    dispatch(action.changeTodoUpdate(index))
  }

  const handleShowAllClick: () => void = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  const handleShowCompletedClick: () => void = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  const handleShowNewClick: () => void = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  const renderedTodoList: Array<Todo> = todos.filter(todo => filteredStatus === "all" || filteredStatus === todo.status)

  return (
    <div>
      <h1>TODO LIST:</h1>
      <TodoForm />
      <TodoList todo={renderedTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  )
}

export default TodoPage