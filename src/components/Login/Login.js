import React from 'react';


import { Form, Input, Button, Checkbox } from 'antd';

import './login.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const onFinish = () => {
  console.log('Success');
};

const onFinishFailed = () => {
  console.log('Failed');
};

function LoginPage(props){



    return (
        <div className="wrapper">
            <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Unesite vaš email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Šifra"
        name="šifra"
        rules={[{ required: true, message: 'Unesite šifru!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Zapamti me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Prijavi se
        </Button>
      </Form.Item>
    </Form>
        </div>
      
    ); 
}

export default LoginPage;