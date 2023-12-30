import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import styled from 'styled-components'
import k1 from '../Assets/k1.webp'
import Col from 'react-bootstrap/esm/Col'
import k2 from '../Assets/k2.png'
import k3 from '../Assets/k3.png'
import k4 from '../Assets/k4.png'
import Carousel from 'react-bootstrap/Carousel';
import k5 from '../Assets/k5.webp'
import k6 from '../Assets/k6.webp'

export default function S1() {
  return (
    <Styles>
      <Container>
        <Row>
            <img src={k1} />
        </Row>
        <Row style={{marginTop: '30px'}}>
            <Col md='6'>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                产品型号：VESSEL V5
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                产品尺寸：长: 7500mm 宽：3300mm 高：3200mm
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                占地面积：24.75m2
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                总净重量：6.5吨
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                适住人数：2人
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                室内布局：一室一卫
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                用电功率：12/15kw
                </h3>
                <img src={k2} style={{width: '100%'}}/>
            </Col>
            <Col md='6'>
                <img src={k3} style={{width: '100%'}} />
                <img src={k4} style={{width: '100%'}} />
            </Col>
        </Row>
      </Container>
      <center>
    <Carousel style={{width: 'auto', height: '500px', marginTop: '40px'}}>
      <Carousel.Item>
        <img src={k5} text="First slide" style={{width: 'auto', height: '500px'}} />
        <Carousel.Caption>
          <h3>微宿，为你筑在山川湖海里的家</h3>
          <p>感受大自然的每一个落笔</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={k6} text="Second slide" style={{width: 'auto', height: '500px'}} />
        <Carousel.Caption>
          <h3>一场充满科技感的时光旅行，感受未来已来</h3>
          <p>日落匆匆，但我们有一整晚的时间等满天繁星</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </center>
    </Styles>
  )
}

const Styles = styled.div``