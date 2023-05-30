import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const gerder = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
  ];
  const submitSignIn = (d) => {
    console.log(d);
  };
  return (
    <div className="container d-flex justify-content-center py-5">
      <div className="form-wrapper">
        <h4>Sign Up</h4>
        <Form onSubmit={handleSubmit(submitSignIn)}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>first Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your firstName"
              {...register("firstName", {
                required: true,
                minLength: 5,
                maxLength: 15,
              })}
            />
            {errors.firstName?.type === "required" && (
              <p className="text-danger">First name is required</p>
            )}
            {errors.firstName?.type === "minLength" && (
              <p className="text-danger">Min Length of First name is 5</p>
            )}
            {errors.firstName?.type === "maxLength" && (
              <p className="text-danger">Max Length of First name is 15</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your LastName"
              {...register("lastName", {
                required: true,
                minLength: 5,
                maxLength: 15,
              })}
            />
            {errors.lastName?.type === "required" && (
              <p className="text-danger">First name is required</p>
            )}
            {errors.lastName?.type === "minLength" && (
              <p className="text-danger">Min Length of Last name is 5</p>
            )}
            {errors.lastName?.type === "maxLength" && (
              <p className="text-danger">Max Length of Last name is 15</p>
            )}
          </Form.Group>

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

          <Form.Group>
            <Form.Label>Select Your Gerder</Form.Label>
            <Select options={gerder} />
          </Form.Group>

          <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept All Polices" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sing Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SingUp;
