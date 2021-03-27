import React, { useEffect } from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { API_URL } from "../../../shared/shared";
import { Form, Input, Button, Row, Col, message } from "antd";
import "./register.css";
import { useHistory } from "react-router-dom";

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

function RegisterPage(props) {
  useEffect(() => {
    if (localStorage.getItem("access_token")) window.location.href = "/shop";
  }, []);

  let history = useHistory();

  const Register = (name, lastName, email, password, username, address, telephoneNumber) => {
    Axios.post(API_URL + "/identity/register", {
      firstName: name,
      lastName: lastName,
      email: email,
      password: password,
      username: email,
      address: address,
      telephoneNumber: telephoneNumber,
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          history.push("/login");
          message.success(res.data.message);
        } else message.error("Greška na serveru, molimo pokušajte ponovo. ");
      })
      .catch((err) => {
        if (err.response.data) message.error(err.response.data.message);
        else message.error("Greška na serveru, molimo pokušajte ponovo. ");
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        lastName: "",
        name: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Unesite ime"),
        lastName: Yup.string().required("Unesite prezime"),
        email: Yup.string().email("Email je potreban").required("Email je potreban"),
        password: Yup.string().min(6, "Šifra mora biti 6 karaktera ").required("Unesite password"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Šifre moraju biti iste")
          .required("Ponovo unesite password"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            lastname: values.lastname,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
          };

          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <div className="app2">
              {window.location.href.includes("?reason=cart") && (
                <h4 style={{ textAlign: "center", color: "crimson" }}>
                  Morate biti registrovani da bi ste dodali proizvod u korpu!
                </h4>
              )}
              <h2>Registracija</h2>
              <Form style={{ minWidth: "375px" }} {...formItemLayout} onSubmit={handleSubmit}>
                <Form.Item label="Ime">
                  <Input
                    id="name"
                    placeholder="Unesite vaše ime"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "text-input error" : "text-input"}
                  />
                  {errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}
                </Form.Item>

                <Form.Item label="Prezime">
                  <Input
                    id="lastName"
                    placeholder="Unesite vaše prezime"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.lastName && touched.lastName ? "text-input error" : "text-input"}
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="input-feedback">{errors.lastName}</div>
                  )}
                </Form.Item>

                <Form.Item label="Adresa">
                  <Input
                    placeholder="Unesite vašu adresu"
                    type="tel"
                    id="address"
                    type="text"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Item>

                <Form.Item label="Broj Telefona">
                  <Input
                    placeholder="Unesite vaš broj telefona"
                    type="tel"
                    id="telephoneNumber"
                    type="text"
                    value={values.telephoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  hasFeedback
                  validateStatus={errors.email && touched.email ? "error" : "success"}
                >
                  <Input
                    id="email"
                    placeholder="Unesite vaš Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "text-input error" : "text-input"}
                  />
                  {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
                </Form.Item>

                <Form.Item
                  label="Šifra"
                  hasFeedback
                  validateStatus={errors.password && touched.password ? "error" : "success"}
                >
                  <Input
                    id="password"
                    placeholder="Unesite vašu šifru"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password ? "text-input error" : "text-input"}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </Form.Item>

                <Form.Item label="Ponovite" hasFeedback>
                  <Input
                    id="confirmPassword"
                    placeholder="Ponovite šifru"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword ? "text-input error" : "text-input"
                    }
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="input-feedback">{errors.confirmPassword}</div>
                  )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Row gutter={24} align="center">
                    <Col col={24}>
                      <Button
                        onClick={() =>
                          Register(values.name, values.lastName, values.email, values.password, values.email)
                        }
                        type="primary"
                        disabled={isSubmitting}
                      >
                        Registruj se
                      </Button>
                    </Col>
                    <Col col={24}>
                      <Button onClick={() => history.push("/login")} type="link" disabled={isSubmitting}>
                        Login
                      </Button>
                    </Col>
                  </Row>
                </Form.Item>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default RegisterPage;