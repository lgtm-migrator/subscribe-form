import React, { Component } from 'react';
import { Formik } from 'formik';
import { Form, Icon, Input, Button } from 'antd';
import './App.css';

class SubscriptionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  getFieldDecorator = e => {

  }

  getFieldsError = e => {

  }

  render() {
    const usernameError = '';
    const passwordError = '';
    const hasErrors = false;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {this.getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {this.getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(this.getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default SubscriptionForm;
