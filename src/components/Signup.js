import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          marginTop: 0,
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytd7QD01XuURJ8X_DF_Rf7_54WGz9VZZBaKTOKluBdfZpp7kVNcGrczoHOEkaK5_F9JE&usqp=CAU")',
          backgroundPosition: "center",
          height: "100%",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        data-bs-theme="dark"
        className="bg-light p-2"
      >
        <CloseButton />
        <CloseButton disabled />
        <h5
          style={{
            marginLeft: "350px",
            marginTop: "20px",
            fontSize: "50px",
            marginBottom: "50px",
            color: "Turquoise",
            textShadow: "revert-layer",
          }}
        >
          𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐟𝐨𝐫 𝐅𝐀𝐌𝐄𝐁𝐎𝐎𝐊
        </h5>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label style={{ color: "whitesmoke" }}>
                Enter your Name
              </Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{ color: "whitesmoke" }}>
                Enter your Email
              </Form.Label>
              <Form.Control type="Email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={{ color: "white" }}>
                {" "}
                Create your Password
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridDateofBirth">
            <Form.Label style={{ color: "white" }}>
              Enter your Date of Birth
            </Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridPhoneNumber">
            <Form.Label style={{ color: "white" }}>
              Enter your Phone Number
            </Form.Label>
            <Form.Control
              type="number"
              
              size="4"
              placeholder="XXXXXXXXXX"
            />
          </Form.Group>
          <Form.Group
            style={{ color: "white" }}
            className="mb-3"
            id="formGridCheckbox"
          >
            <Form.Check type="checkbox" label="Are you under 18?" />
          </Form.Group>
          <Button style={{ marginBottom: "50px" }} variant="success">
            Register
          </Button>{" "}
          <Button
            onClick={() => navigate("/login")}
            style={{ marginBottom: "50px" }}
            variant="outline-warning"
          >
            Already Registered
          </Button>{" "}
        </Form>
      </div>
    </>
  );
};
export default Signup;
