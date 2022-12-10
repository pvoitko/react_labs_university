import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";
import styled from "styled-components";

const MyLogo = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: lime;
  text-decoration: gray wavy underline;
`;

const Layout = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Link to="/"><MyLogo>React06</MyLogo></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                </Container>
            </Navbar>
            <Container className="mt-3">
                <Outlet/>
            </Container>
        </div>
    );
};

export default Layout;