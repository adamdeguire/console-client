import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LogForm = ({ log, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='title'>
      <Form.Label>Log Title</Form.Label>
      <Form.Control
        required
        name='title'
        value={log.title}
        placeholder='Log Title'
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId='content'>
      <Form.Label>Log Content</Form.Label>
      <Form.Control
        onChange={handleChange}
        required
        name='content'
        value={log.content}
        placeholder='Log Content'
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
)

export default LogForm
