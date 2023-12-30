import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import styled from 'styled-components'
import o1 from '../Assets/o1.webp'
import Col from 'react-bootstrap/esm/Col'
import o2 from '../Assets/o2.png'
import o3 from '../Assets/o3.png'
import o4 from '../Assets/o4.png'
import Carousel from 'react-bootstrap/Carousel';
import o5 from '../Assets/o5.webp'
import o6 from '../Assets/o6.webp'
import o7 from '../Assets/o7.webp'

export default function S1() {
  return (
    <Styles>
      <Container>
        <Row>
            <img src={o1} />
        </Row>
        <Row style={{marginTop: '30px'}}>
            <Col md='6'>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                产品型号：VESSEL O5
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                产品尺寸：长: 11500mm 宽：3300mm 高：3200mm
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                占地面积：38.0m2
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                总净重量：10.5吨
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                适住人数：2-4人
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                室内布局：一室一厅一卫
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                用电功率：15/19kw
                </h3>
                <img src={o2} style={{width: '100%'}}/>
            </Col>
            <Col md='6'>
                <img src={o3} style={{width: '100%'}} />
                <img src={o4} style={{width: '100%'}} />
            </Col>
        </Row>
      </Container>
      <center>
    <Carousel style={{width: 'auto', height: '500px', marginTop: '40px'}}>
      <Carousel.Item>
        <img src={o5} text="First slide" style={{width: 'auto', height: '500px'}} />
        <Carousel.Caption>
          <h3>微宿，为你筑在山川湖海里的家</h3>
          <p>感受大自然的每一个落笔</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={o6} text="Second slide" style={{width: 'auto', height: '500px'}} />
        <Carousel.Caption>
          <h3>一场充满科技感的时光旅行，感受未来已来</h3>
          <p>日落匆匆，但我们有一整晚的时间等满天繁星</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={o7} text="Third slide" style={{width: 'auto', height: '500px'}} />
        <Carousel.Caption>
          <h3>家人闲坐，灯火可亲</h3>
          <p>
          微宿让大自然变得触手可及
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </center>
    </Styles>
  )
}

const Styles = styled.div``