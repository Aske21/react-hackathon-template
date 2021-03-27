import React, { useEffect } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { Row, Col } from "antd";

import "./register.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Register(props) {
  return (
    <div className="wrapper2">
      <h2 className="regtitle">Registracija</h2>

      <div className="content">
        <Form style={{ minWidth: "375px" }} {...formItemLayout}>
          <Form.Item label="Ime">
            <Input id="name" placeholder="Unesite vaše ime" type="text" />
          </Form.Item>

          <Form.Item label="Prezime">
            <Input
              id="lastName"
              placeholder="Unesite vaše prezime"
              type="text"
            />
          </Form.Item>

          <Form.Item label="Adresa">
            <Input
              placeholder="Unesite vašu adresu"
              type="tel"
              id="address"
              type="text"
            />
          </Form.Item>

          <Form.Item label="Broj Telefona">
            <Input
              placeholder="Unesite vaš broj telefona"
              type="tel"
              id="telephoneNumber"
              type="text"
            />
          </Form.Item>

          <Form.Item label="Email" hasFeedback>
            <Input id="email" placeholder="Unesite vaš Email" type="email" />
          </Form.Item>

          <Form.Item label="Šifra">
            <Input
              id="password"
              placeholder="Unesite vašu šifru"
              type="password"
            />
          </Form.Item>

          <Form.Item label="Ponovite" hasFeedback>
            <Input
              id="confirmPassword"
              placeholder="Ponovite šifru"
              type="password"
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Row gutter={24} align="center">
              <Col col={24}>
                <Button type="primary">Registruj se</Button>
              </Col>
              <Col col={24}>
                <Button type="link">Login</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
