import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { createTask } from "../slice/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa6";

const Todo = () => {
  const [todoText, setTodotext] = useState('');
  const todoItems = useSelector((state) => state.todoInfo.todolist);
  const dispatch = useDispatch();

  const handleText = (e) => {
    setTodotext(e.target.value);
  };

  const handleCreate = () => {
    dispatch(createTask(todoText));
    setTodotext("");
  };

  return (
    <div className="todo-main-section">
      
      <div className="todo-list-wrapper">
        <h5>Hi, User!</h5>
        <label>All your Notes here...</label>
        <ul>
          {todoItems.map((item, index) => {
            return (
              <TodoItem todo={item} key={index}  id={index}/>
            );
          })}
        </ul>
      </div>
      <div className="todo-add-section">
        <input name="todo" type="text" value={todoText} onChange={handleText} placeholder="Create your Task" />
        <button onClick={handleCreate}><FaPlus /></button>
      </div>
    </div>
  );
};

export default Todo;
