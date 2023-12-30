import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import styled from 'styled-components'
import s1 from '../Assets/s1.webp'
import Col from 'react-bootstrap/esm/Col'
import s5 from '../Assets/s5.png'
import s2 from '../Assets/s2.png'
import s7 from '../Assets/s7.png'
import Carousel from 'react-bootstrap/Carousel';
import s8 from '../Assets/s8.webp'
import s9 from '../Assets/s9.webp'
import s10 from '../Assets/s10.webp'
import s11 from '../Assets/s11.webp'

export default function S1() {
  return (
    <Styles>
      <Container>
        <Row>
            <img src={s1} />
        </Row>
        <Row style={{marginTop: '30px'}}>
            <Col md='6'>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                产品型号：VESSEL S5
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                产品尺寸：长: 8500mm 宽：3300mm 高：3300mm
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                占地面积：28.0m2
                </h3>
                <h3 style={{fontSize: '1.3rem', padding: '5px'}}>
                总净重量：8吨
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
                <img src={s5} style={{width: '100%'}}/>
            </Col>
            <Col md='6'>
                <img src={s2} style={{width: '100%'}} />
                <img src={s7} style={{width: '100%'}} />
            </Col>
        </Row>
      </Container>
      <center>
    <Carousel style={{width: 'auto', height: '500px', marginTop: '40px'}}>
      <Carousel.Item>
        <img src={s8} text="First slide" style={{width: 'auto', height: '500px'}} />
        <Carousel.Caption>
          <h3>微宿，为你筑在山川湖海里的家</h3>
          <p>感受大自然的每一个落笔</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={s9} text="Second slide" style={{width: 'auto', height: '500px'}} />
        <Carousel.Caption>
          <h3>一场充满科技感的时光旅行，感受未来已来</h3>
          <p>日落匆匆，但我们有一整晚的时间等满天繁星</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={s10} text="Third slide" style={{width: 'auto', height: '500px'}} />
        <Carousel.Caption>
          <h3>家人闲坐，灯火可亲</h3>
          <p>
          微宿让大自然变得触手可及
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={s11} text="Third slide" style={{width: 'auto', height: '500px'}} />
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