import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../utilities";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: generateId(),
        text: "Learn React",
        completed: false,
      },
      {
        id: generateId(),
        text: "Learn Redux",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: generateId(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
