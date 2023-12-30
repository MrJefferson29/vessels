import React from "react";
import styled from "styled-components";
import Caroussel from "./Caroussel";
import h4 from "../Assets/h4.webp";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import h5 from "../Assets/h5.webp";
import h6 from "../Assets/h6.webp";
import h7 from "../Assets/h7.png";

export default function Home() {
  return (
    <Styles>
        <Caroussel />
      <Container>
        <Row style={{ marginTop: "15px" }}>
          <Col md="7">
            <img src={h4} style={{ width: "100%" }} />
          </Col>
          <Col
            md="4"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2>工厂整体预制,2小时落地即用 不限地势，生态环保</h2>
            <img src={h5} style={{ width: "100%" }} />
            <h2>
              远离纷繁喧扰，筑一方独处浪漫
              风景从来没有远离，就在微宿醒来的每个清晨里
            </h2>
          </Col>
        </Row>
        <Row style={{ background: "#d5d3d3" }}>
          <Col md="5">
            <h2>安装与运输</h2>
            <p style={{ fontSize: "1.5rem" }}>运输准备</p>
            <p style={{ fontSize: "1.2rem" }}>
              <ul>
                <li>
                  运输之前把太空舱内所有可移动的物品另外打包运输，或者将可移动的物品固定在太空舱内，以免运输途中损坏
                </li>
                <li>运输之前把窗帘拆下打包固定好，到项目地再安装</li>
                <li>
                  空调外机、热水器、入户楼梯、起吊用具等重型设备不可放在太空舱内运输，需单独打包运输
                </li>
                <li>将太空舱的每个支撑脚用绳索固定在挂车两侧</li>
                <li>
                  运输之前检查所有门窗的锁扣是否已经反锁，避免门窗在运输过程中损坏
                </li>
              </ul>
            </p>
          </Col>
          <Row>
            <Col md="6">
              <h2>海上运输</h2>
              <p style={{ fontSize: "1.2rem" }}>
                <ul>
                  <li>
                    使用40FR的框架柜（11.762*2.240*2.034m）运输，微宿产品的最长尺寸为11.5m
                  </li>
                  <li>海上运输包装参考图片（外包装为防护罩/雨布）</li>
                </ul>
              </p>
            </Col>
            <Col md="6">
              <img src={h6} style={{ width: "100%" }} />
            </Col>
          </Row>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <img src={h7} style={{ width: "100%" }} />
          <Col
            md="4"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ fontSize: "1.5rem" }}>运输阶段</h3>
            <p style={{ fontSize: "1.2rem" }}>
              VESSEL
              系列产品标准采购合同包含运输费用，由我司统一安排货车运输至项目现场。
              标准货车为13.5m
              长半挂车，运输宽度为3m，运输高度不大于4.2m，可全国高速道路自由通行。
            </p>
          </Col>
          <Col
            md="4"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",

            }}
          >
            <h3 style={{ fontSize: "1.5rem" }}>吊装阶段</h3>
            <p style={{ fontSize: "1.2rem" }}>
              货物抵达现场后，需要客户自行联络当地的吊车服务，我司技术团队会提前抵达现场指导。
              VESSEL
              全系列产品吊装重量在6至10吨，建议选用不小于25吨级别的吊车装卸。
            </p>
          </Col>
          <Col
            md="4"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",

            }}
          >
            <h3 style={{ fontSize: "1.5rem" }}>安装阶段</h3>
            <p style={{ fontSize: "1.2rem" }}>
              安装产品前，客户需按照我司VESSEL
              产品标准基础水电图纸，完成给水、给电、排污管线及承重基础的现场工程。
              在我司技术员的指导下，精准落位到设计的安装点位，接通水电后，完成通水通电测试，交由客户验收。
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div``;
