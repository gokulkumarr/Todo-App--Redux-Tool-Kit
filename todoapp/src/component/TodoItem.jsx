import React from "react";
import { useDispatch } from "react-redux";
import { completedTask, incompleteTask, deleteTask } from "../slice/todoSlice";
import { FaRegTrashCan, FaCheck, FaArrowRotateLeft } from "react-icons/fa6";

const TodoItem = ({todo, id}) => {
    const dispatch = useDispatch();

    return (
        <>
            <li key={id}>
                <span className={todo.completed ? 'text-line-through' : ''}>{todo.text}</span>
                <div className="btn-group">
                    {!todo.completed ?
                    <button onClick={() => dispatch(completedTask(id))} className="green-btn"><FaCheck /></button> :
                    <button onClick={() => dispatch(incompleteTask(id))} className="yellow-btn"><FaArrowRotateLeft /></button> }
                    <button onClick={() => dispatch(deleteTask(id))} className="del-btn"><FaRegTrashCan /></button>
                </div>
            </li>
        </>
    )
}

export default TodoItem;