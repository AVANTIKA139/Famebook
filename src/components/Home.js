import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundColor: "orchid",
          height: "100vh",
          marginTop: 0,
          border: "10px solid black",
          padding: "55px",
          lineHeight: 2,
          backgroundImage:
            'url("https://images.freecreatives.com/wp-content/uploads/2016/04/Free-Website-BAckgrounds1.jpg")',
        }}
      >
        <div style={{ backgroundColor: "turquoise" }}>
          <Navbar bg="light" data-bs-theme="light" color="tuquoise">
            <Container>
              <Navbar.Brand href="#home">FAMEBOOK</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#Explore">Explore</Nav.Link>
                <Nav.Link href="#Features">Features</Nav.Link>
                <Nav.Link href="#AboutUs">AboutUs</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <h1
          style={{
            fontStyle: "italic",
            fontSize: "60px",
            marginBottom: "50px",
            marginLeft: "700px",
            color: "turquoise",
            marginTop: "50px",
          }}
        >
          Welcomee to FAMEBOOK!!{" "}
        </h1>
        <p
          style={{
            font: "message-box",
            fontSize: "28px",
            fontStyle: "revert-layer",
            marginLeft: "700px",
            marginBottom: "60px",
            color: "Background",
          }}
        >
          "Connect, Share, Thrive: Where Your World Unfolds"{" "}
        </p>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={() => navigate("/signup")}
          style={{ cursor: "pointer", marginLeft: "700px" }}
        >
          Let's START
        </button>

        {/* <button
          style={{ marginLeft: "800px", marginBottom: "40px" }}
          onClick={() => navigate("/signup")}
          class="button-85"
          role="button"
        >
          Let's START
        </button> */}
      </div>
    </>
  );
};
export default Home;
