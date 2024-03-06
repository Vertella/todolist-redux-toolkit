import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        text: action.payload,
        id: Math.random() * 100,
        completed: false,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
