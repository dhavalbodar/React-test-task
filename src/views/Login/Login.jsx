import React from "react";
import Style from "./Login.module.css";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateLoginUser } from "../../Store/Slices/loginSlice";

const Login = () => {
  const { userData } = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    let user = userData.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (user) {
      dispatch(updateLoginUser(user));
      navigate("/home");
    } else {
      alert("Opps!! We Could not find matching credentials");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login Page</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={formik.handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail2">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          isInvalid={
                            formik.touched.email && formik.errors.email
                          }
                          placeholder="Enter email"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <Form.Text className="text-danger">
                            {formik.errors.email}
                          </Form.Text>
                        ) : null}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          isInvalid={
                            formik.touched.password && formik.errors.password
                          }
                          placeholder="Password"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <Form.Text className="text-danger">
                            {formik.errors.password}
                          </Form.Text>
                        ) : null}
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
