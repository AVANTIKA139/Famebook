import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("data:image/jpeg;base64,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")',
          backgroundPosition: "center",
          height: "100%",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "0px",
          padding: "0px",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            marginLeft: "450px",
            marginTop: "20px",
            fontSize: "50px",
            marginBottom: "50px",
            color: "ButtonHighlight",
            textShadow: "revert-layer",
            marginRight: "450px",
            fontStyle: "italic",
            verticalAlign: "baseline",
          }}
        >
          {" "}
          Login Page
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "whitesmoke" }}>
              Email address
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text style={{ color: "whitesmoke" }} className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "whitesmoke" }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            style={{ color: "whitesmoke" }}
            className="mb-3"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Login;
