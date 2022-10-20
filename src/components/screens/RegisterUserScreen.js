import { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Col, Form, Button, Row } from "react-bootstrap";
import { UsersContext } from "../../UserContext";
import { Link } from "react-router-dom";

const SignupUserScreen = () => {
  const history = useHistory();
  const location = useLocation();

  const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { signupUser, user } = useContext(UsersContext);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      history.push(redirect);
    }
  }, [user, history, redirect]);

  function handlesubmit(e) {
    e.preventDefault();
    const newuser = {
      name,
      email,
      phone,
      password,
    };
    signupUser(newuser);
  }

  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={6} lg={6} className="border mt-5 p-3">
          <Form onSubmit={handlesubmit}>
            <Form.Group>
              <h3 className="text-center">SIGN UP</h3>
              <Form.Label> Name</Form.Label>
              <Form.Control
                placeholder="Enter  Name"
                value={name}
                onChange={(text) => setName(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter Email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(text) => setPhone(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </Form.Group>
            <Button type="submit">SIGN UP</Button>
            <p>
              Already have account? <Link to="/login">LOGIN HERE</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignupUserScreen;
