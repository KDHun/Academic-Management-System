//import { createRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./login.css";
//import axios from "axios";
//import parseJwt from "../utils/jwt";
//import Header from "../components/Header";
function Login() {
  var style1 = {
    marginTop: "150px",
    backgroundColor: "rgb(178, 234, 236)",
    maxWidth: "450px" ,   
  };
  var style2 = {
    backgroundColor: "black",
    color: "white",
    marginLeft: "150px",
  };
  return (
    <>
    <Container
      className={"mt-4 container-sm shadow p-3 my-4 " } 
      style = {style1}>
      
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username or ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username or ID"
            // ref={usernameRef}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          // ref={pwdRef}
           />
          <Form.Text className="text-muted">
            If you are logining in for the first time use DOB as the password in
            format 'yyyy-mm-dd'
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" style={style2}>
          Submit
        </Button>
      </Form>
    </Container>
    </>
  );
}
export default Login;