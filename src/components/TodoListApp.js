import React from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../todoSlice'; // Rename imported action creators


function TodoList() {
  const todos = useSelector((state) => state.todo.todos); // Access todos from the Redux store
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault(); // Prevent form submission
    const input = e.target.elements.todoInput.value; // Get the input value directly from the form
    if (input.trim() !== '') {
      dispatch(addTodo(input)); // Dispatch addTodo action with input text
      e.target.reset(); // Clear the input field
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id)); // Dispatch toggleTodo action with todo id
  };

  const handleRemoveTodo = (id) => {
    dispatch(deleteTodo(id)); // Dispatch removeTodo action with todo id
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <input
          type="text"
          name="todoInput"
          placeholder="Add a new todo"
        />
        <button type="submit">+</button>
      </form>
      <div className="Todos">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No todos</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
