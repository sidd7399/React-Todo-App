import React, { useState } from 'react';
import LoginForm from './LoginForm';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Button, Container } from 'react-bootstrap';

function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Container  className='mt-5'>
      {user ? (
        <div className='d-flex flex-column gap-3'>
        <div>
          <Button variant='danger' onClick={handleLogout}>Logout</Button>
        </div>
          <h2>Welcome, {user}</h2>
          <TodoForm addTodo={addTodo} user={user} />
          <TodoList todos={todos} />
        </div>
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </Container>
  );
}

export default App;