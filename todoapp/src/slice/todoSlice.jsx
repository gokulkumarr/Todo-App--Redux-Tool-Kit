import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todolist: [],
  },
  reducers: {
    createTask: (state, action) => {
      state.todolist = [...state.todolist,  { text: action.payload, completed: false }];
    },
    completedTask: (state, action) => {
        state.todolist = state.todolist.map((list, index) => {
            return index === action.payload ? {...list, completed: true} : list;
        });
      },
      incompleteTask: (state, action) => {
        state.todolist = state.todolist.map((list, index) => {
            return index === action.payload ? {...list, completed: false} : list;
        });
      },
    deleteTask: (state, action) => {
      state.todolist = state.todolist.filter((list, index) => {
        return index !== action.payload;
      });
    },
  },
});

export const { createTask, completedTask, incompleteTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
