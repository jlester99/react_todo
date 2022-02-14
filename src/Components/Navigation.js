import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const {currentUser, authenticate, logout} = useAuth();
  return (
    <Navbar variant="dark" bg="dark" expand="md" className="p-4">
      <Navbar.Brand href="/">My Class To-Do List</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          {currentUser &&
          <>
            <Link to="/todoitems" className="nav-link">
              Tasks
            </Link>
            <Link to="/categories" className="nav-link">
              Category
            </Link>
d          </>
          }
          {currentUser ? (
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          ) : (
            <Nav.Link onClick={() => authenticate()}>Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
