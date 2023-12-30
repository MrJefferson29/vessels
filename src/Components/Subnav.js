import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

export default function Subnav() {
  return (
    <Styles>
      <Container style={{width: 'auto'}}>
        <Nav  className="justify-content-center" variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link className="link" href="/projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" href="/projects/news">News</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" href="/help-center/faq">FAQ</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
.link {
    font-size: 1.2rem;
    color: black;
    font-weight: 800;
    font-family: 'Poppins';
    margin-left: 45px;
  }
`;
