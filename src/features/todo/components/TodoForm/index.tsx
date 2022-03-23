import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../Redux/rootReducer';
import * as action from "../../../../Redux/Todo/todoActions"

const TodoForm = () => {
  const [value, setValue] = useState<string>('')
  const [check, setCheck] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch()
  const { todos } = useSelector((state: RootState) => state.todo)
  const { isAdd } = useSelector((state: RootState) => state.todo);
  const { todoUpdated } = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    setValue(todoUpdated.city);
    if (todoUpdated.status !== "")
      (document.getElementById(todoUpdated.status) as HTMLFormElement).checked = true;
  }, [todoUpdated]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAdd) {
      if (value !== "") {
        const formValues = {
          id: String(todos.length + 1),
          city: value,
          status: check
        }
        dispatch(action.addTodo(formValues))
        setValue("");
      }
    } else {
      const updateTodo = {
        id: todoUpdated.id,
        city: value,
        status: check
      };
      console.log(updateTodo)
      dispatch(action.updateTodo(updateTodo));
      setValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="City" ref={inputRef} onChange={(e) => setValue(e.target.value)} value={value} />
      </div>
      <div>
        <input type="radio" id="new" name="todo-status" value="new" onChange={() => setCheck('new')} />
        <label>New</label>
        <input type="radio" id="completed" name="todo-status" value="completed" onChange={() => setCheck('completed')} />
        <label>Completed</label>
      </div>
      <button type="submit" >{isAdd ? "Add" : "Save"}</button>
    </form>
  )
}

export default TodoForm