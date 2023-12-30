import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";
import h1 from '../Assets/h1.webp';
import h2 from '../Assets/h2.webp';
import h3 from '../Assets/h3.webp';
import Container from "react-bootstrap/esm/Container";

export default function Caroussel() {
  return (
    <Styles>
    <Carousel>
      <Carousel.Item>
        <img src={h1} text="First slide" />
        <Carousel.Caption>
          <h3>微宿，为你筑在山川湖海里的家</h3>
          <p>感受大自然的每一个落笔</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={h2} text="Second slide" />
        <Carousel.Caption>
          <h3>一场充满科技感的时光旅行，感受未来已来</h3>
          <p>日落匆匆，但我们有一整晚的时间等满天繁星</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={h3} text="Third slide" />
        <Carousel.Caption>
          <h3>家人闲坐，灯火可亲</h3>
          <p>
          微宿让大自然变得触手可及
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Styles>
  );
}

const Styles = styled.div`
overflow-x: hidden;
.carousel-inner {
  position: relative;
  width: auto;
  height: auto;
  object-fit: cover;
`;