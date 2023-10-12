import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
function TodoForm({ addTodo, user }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new Todo object and set its fields (e.g., dateCreated, complete).
    // Add the new Todo to the list of Todos.
    addTodo({
      title,
      description,
      author:user,
      dateCreated:Date.now(),
      complete:false
    });
    // Reset form fields.
    setTitle('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <div>
        <Button variant="primary"  type='submit'>
          Add Todo
        </Button>
      </div>
    </Form>
  );
}

export default TodoForm;