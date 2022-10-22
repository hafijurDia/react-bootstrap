import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { AuthContext } from "../context/Auth.Context";
import { ThemeContext } from "../context/Theme.context";

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const {logout,user} = useContext(AuthContext)
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          Dev Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {user &&
            <>
            <Nav.Link as={NavLink} to="/contacts">
              Contacts
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add-contact">
              Add Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard/profile">
              Dashboard
            </Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
            </>
            }

            {!user && 
            <>
              <Nav.Link as={NavLink} to="/register">
              Register
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            </>
            }
            
          </Nav>

          <div className="switch">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            <label style={{ verticalAlign: "super" }}>
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
