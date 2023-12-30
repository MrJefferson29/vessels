import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styled from "styled-components";
import z1 from "../Assets/z1.jpg";
import z2 from "../Assets/z2.jpg";
import z3 from "../Assets/z3.jpg";
import z4 from "../Assets/z4.jpg";

export default function News() {
  return (
    <Styles>
      <Container>
        <Row className="space">
          <Col md="4" style={{ position: "relative" }}>
            <img className="rug" src={z1} style={{ position: "relative" }} />
          </Col>
          <Col
            md="8"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3>The next stop of travel:VESSEL, Camping, Sustainable</h3>
            <p
              style={{ fontSize: "1.4rem", color: "black", fontWeight: "600" }}
            >
              Many people left the country, and many returned to the country.
              Among those who came back, there were returnees, tourists, and
              builders. Soon, in a "no man'sland" closer to nature, a new option
              for outdoor living appeared..
            </p>
          </Col>
        </Row>
        <Row className="space">
          <Col md="4" style={{ position: "relative" }}>
            <img className="rug" src={z2} style={{ position: "relative" }} />
          </Col>
          <Col
            md="8"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3>VESSEL, a new start in the prefabricated hotel industry</h3>
            <p
              style={{ fontSize: "1.4rem", color: "black", fontWeight: "600" }}
            >
              {" "}
              Sleeping bags and wooden cabins are old-styled. Original smooth
              curved appearance,classic color matching aesthetic design, all
              galvanized steel structure frame and aluminum alloy shell, whole
              smart home system. When...
            </p>
          </Col>
        </Row>

        <Row className="space">
          <Col md="4" style={{ position: "relative" }}>
            <img className="rug" src={z3} style={{ position: "relative" }} />
          </Col>
          <Col
            md="8"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3>
              Moving forward, embrace the ultimate light luxury camping
              experience
            </h3>
            <p
              style={{ fontSize: "1.4rem", color: "black", fontWeight: "600" }}
            >
              In this stage of the post-epidemic era, camping tourism has become
              a new growth pole of the travel industry. According to local
              News...
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
const Styles = styled.div`
  .space {
    padding: 10px;
    box-shadow: 1px 00px 1px 01px;
    &:hover {
      background: rgb(202, 210, 217);
    }
  }
  .rug {
    border-radius: 10px;
  }
`;
