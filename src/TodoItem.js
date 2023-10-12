import React, { useState } from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';

function formatDate(date) {
  return new Date(date).toLocaleString();
}

function TodoItem({ todo }) {
  const [complete, setComplete] = useState(todo.complete);

  const handleCheckboxChange = () => {
    if (!complete) {
      todo.dateCompleted = Date.now();
    }else{
      todo.dateCompleted = null;
    }
    setComplete((prev) => !prev)
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.description}</Card.Text>
        <ListGroup>
          <ListGroup.Item>Author: {todo.author}</ListGroup.Item>
          <ListGroup.Item>Date Created: {formatDate(todo.dateCreated)}</ListGroup.Item>
          <ListGroup.Item>Date Completed: {todo.dateCompleted ? formatDate(todo.dateCompleted) : '-'}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Form.Check
          type="checkbox"
          label="Complete"
          checked={complete}
          onChange={handleCheckboxChange}
        />
      </Card.Footer>
  </Card>
  );
}

export default TodoItem;