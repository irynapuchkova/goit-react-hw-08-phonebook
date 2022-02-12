import { useState } from "react";

import { useRegisterUserMutation } from "../redux/auth/auth-operations";

import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 700px;
  background: #fafafa;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 6px solid #305a72;
`;

const Input = styled.input`
  box-shadow: inset 0px 1px 0px 0px #3985b1;
  background-color: #d5f6ef;
  border: 1px solid #1db374;
  display: inline-block;
  cursor: pointer;
  color: #black;
  padding: 8px 18px;
  text-decoration: none;
  font: 12px Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
  width: 100px;
  height: 32px;
  border: 2px solid;
  border-color: transparent;
  background-color: #83d426;
  cursor: pointer;
`;

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, results] = useRegisterUserMutation();

  const resetState = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ name, email, password });
    resetState();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password min 7 smbs"
          required
          value={password}
          onChange={handleChange}
        />
        <Button type="submit">Register</Button>
      </Form>
      ;
    </>
  );
}
