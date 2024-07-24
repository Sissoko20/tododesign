
import { useState } from 'react';
import '../Styles/App.css';
import TodoForms from './TodoForm';
import TodoText from './TodoText';
import TodoList from './TodoList';
import TodoItem from './TodoItem';



function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo([...todos, todo]);
  };

  const removeTodo=(index) =>{
 const newValue=[...todos];
 newValue.splice(index,1);
 setTodo(newValue);

  }
  const updateTodo = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index].text = newValue;
    setTodo(newTodos);
  };




  return (
    <div className="App" >
      <TodoText/>
      <TodoForms addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
      
    </div>
  );
}

export default App;
