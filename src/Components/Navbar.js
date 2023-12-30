import React from "react";
import { ReactDOM } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Subnav from "./Subnav";

export default function NavBar() {
  return (
    <Styles>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="none"
        variant="light"
        sticky="top"
      >
        <Navbar.Brand href="/home">
          <div class="container">
            <div class="box">
              <div class="title">
                <span class="block"></span>
                <h1 style={{ color: "black" }}>
                  VESSEL<span></span>
                </h1>
              </div>

              <div class="role">
                <div class="block"></div>
                <p style={{ color: "black" }}>Mobile Homes</p>
              </div>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          sticky="top"
          className="justify-content-end"
        >
          <Nav.Link className="link" href="/vessels/s5-vessel">
            <font style={{ fontSize: "1.9rem" }}>S</font>5
          </Nav.Link>
          <Nav.Link className="link" href="/vessels/e5-vessel">
          <font style={{ fontSize: "1.9rem" }}>E</font>5

          </Nav.Link>
          <Nav.Link className="link" href="/vessels/e7-vessel">
          <font style={{ fontSize: "1.9rem" }}>E</font>7
          </Nav.Link>
          <Nav.Link className="link" href="/vessels/o5-vessel">
          <font style={{ fontSize: "1.9rem" }}>0</font>5

          </Nav.Link>
          <Nav.Link className="link" href="/vessels/v5-vessel">
          <font style={{ fontSize: "1.9rem" }}>V</font>5
            
          </Nav.Link>
          <Nav.Link className="link" href="/vessels/v7-vessel">
          <font style={{ fontSize: "1.9rem" }}>V</font>7

          </Nav.Link>

          <Nav.Link className="links" href="/projects">
            PROJECTS
          </Nav.Link>
          <Nav.Link className="links" href="/projects/news">
            NEWS
          </Nav.Link>
          <Nav.Link className="links" href="help-center/faq">
            FAQ
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
const Styles = styled.div`
margin: 30px;
border-bottom: 0.1px solid grey;
.link {
  box-shadow: 0px 0px 5px;
  font-size: 1.6rem;
  color: black;
  font-weight: 900;
  font-family: 'Poppins';
  margin-left: 40px;
  &:hover {
    box-shadow: 2px 2px 5px orange;
    transition: 0.4s;
    color: aliceblue;
    background: black;
  }
}
.links {
  font-size: 1.5rem;
  color: black;
  font-weight: 800;
  font-family: 'Poppins';
  margin-left: 40px;
  &:hover {
    box-shadow: 2px 2px 5px orange;
    transition: 0.4s;
    color: aliceblue;
    background: black;
  }
}
.container {
  // margin-left: 0px;
}
.eor {
  display: flex;
  align-items: center;
  justify-content: center;
}
@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');

  .box {
    width: auto;
    height: 90px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .title {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;

      .block {
        color: black;
        width: 0%;
        height: inherit;
        background: black;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;
      }

      h1 {
        font-family: 'Poppins';
        color: #fff;
        font-size: 45px;
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        span {
          width:0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;

          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
          animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;

        }
      }
    }

    .role {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: -10px;

      .block {
        color: black;
        width: 0%;
        height: inherit;
        background: orange;
        position: absolute;
        animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
         font-weight: 400;
        font-family: 'Lato';
        color: #ffffff;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
}





@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
   65% {
      width: 7px;
    height: 7px;
      bottom: 0px;
      width: 15px
   }
   80% {
      width: 10px;
    height: 10px;
      bottom: 20px
   }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;

  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}




footer {
  width: 350px;
  height: 80px;
  background: #ffb510;
  position: absolute;
  right: 0;
  bottom: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
   animation: top 0.8s forwards;
   animation-delay: 4s;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #232323;
    font-family: 'Poppins';

    i {
      margin-right: 25px;
      font-size: 22px;
      color: #232323;
      animation: icon 2s forwards;
      animation-delay: 4s;
      opacity: 0;
    }
  }
}

@keyframes top {
  0% {
    opacity: 0;
     bottom: -80px
  }
  100% {
    opacity: 1;
     bottom: 0px

  }
}

@keyframes icon {
  0% {
    opacity: 0;
     transform: scale(0.0);
  }
   50% {
      opacity: 1;
     transform: scale(1.3) rotate(-02deg);
   }
  100% {
    opacity: 1;
     bottom: 0px;
  }
}
`;
