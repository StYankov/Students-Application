import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <Navbar className="container" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav as="ul" className="mr-auto">
                    <Nav.Item as="li">
                        <NavLink to="/" className="nav-link" exact activeClassName="active">
                            Students
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <NavLink to="/create" className="nav-link" exact activeClassName="active">
                            Create
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

export default Header;