import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitSignIn = (d) => {
    console.log(d);
  };
  return (
    <div className="container d-flex  justify-content-center py-5 ">
      <div className="form-wrapper">
        <h4>Sign In</h4>

        <Form onSubmit={handleSubmit(submitSignIn)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-danger">Email is required</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 10,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger">Password is Required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-danger">MinLength Of Password is 10 </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-danger">MaxLength Of Password is 20 </p>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            LogIn
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
