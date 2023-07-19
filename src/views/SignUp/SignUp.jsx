import React from "react";
import Style from "./SignUp.module.css";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Store/Slices/signupSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.signup);
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().min(3).max(20).required(),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  };

  const onSubmit = (values) => {
    const isUserExist = userData.some((user) => user.email === values.email);
    if (isUserExist) {
      alert("User already exist please login");
      return;
    }
    dispatch(createUser(values));

    navigate("/");
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
                  <h2 className="fw-bold mb-2 text-uppercase ">Signup Page</h2>
                  <p className=" mb-5">Please enter your details!</p>
                  <div className="mb-3">
                    <Form onSubmit={formik.handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail1s">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Enter name
                          </Form.Label>
                          <Form.Control
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            isInvalid={
                              formik.touched.name && formik.errors.name
                            }
                            placeholder="Enter name"
                          />
                          {formik.touched.name && formik.errors.name ? (
                            <Form.Text className="text-danger">
                              {formik.errors.name}
                            </Form.Text>
                          ) : null}
                        </Form.Group>

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

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          onChange={formik.handleChange}
                          value={formik.values.confirmPassword}
                          isInvalid={
                            formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
                          }
                          placeholder="Password"
                        />
                        {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword ? (
                          <Form.Text className="text-danger">
                            {formik.errors.confirmPassword}
                          </Form.Text>
                        ) : null}
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Sign Up
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{" "}
                        <a href="/" className="text-primary fw-bold">
                          Login
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

export default SignUp;
