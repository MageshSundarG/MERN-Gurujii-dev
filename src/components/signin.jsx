import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Modal,
  Form,
  Button,
  BDiv,
} from 'bootstrap-4-react';
import Login from './login';

export default class App extends Component {
  render() {
    return (
      <div>
        <Modal.Body>
          <Form>
            <Form.Group>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <Form.Input
                type='email'
                id='exampleInputEmail1'
                placeholder='Enter email'
              />
              <Form.Text text='muted'>
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <Form.Input
                type='password'
                id='exampleInputPassword1'
                placeholder='Password'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Container fluid>
            <BDiv mb='3'>
              <Button block lg primary outline type='submit'>
                Sign In
              </Button>
            </BDiv>
            <Login />
            <Row>
              <Col col='md-8'>
                <a href='#'>Dont have an account? Sign Up</a>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </div>
    );
  }
}
