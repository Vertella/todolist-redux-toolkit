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
      };
      state.todos.push(todo);
      state.count += 1;
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
