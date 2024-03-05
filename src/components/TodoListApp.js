
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../todoSlice'; // Rename imported action creators


function App() { 
  //const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  
  const [todo, setNewTodo] = React.useState('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      dispatch(addTodo(todo));
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    dispatch(toggleTodo(id)); // Dispatch toggleTodo action with todo id
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodo(id)); // Dispatch deleteTodo action with todo id
  };

  return (
    <div className="App">
        <h1>TODO List</h1>
        <form className="App-form" onSubmit={handleAddTodo}>
          <input type="text" onInput={(e) => setInput(e.target.value)} />
          <button type="submit">+</button>
        </form>
        <div className="Todos">
          {count > 0 &&
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                id={todo.id}
                onCheck={handleTodoDone}
              />
            ))}
          {count === 0 && <p>No todos</p>}
        </div>
      </div>
  );
}

export default App;
