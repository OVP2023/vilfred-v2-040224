import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'

function ServicePage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)
      const info = {
        avatar:"https://i.ibb.co/vZQRxt1/7m.jpg",
        id:10,
        name:' Служба, охрана мамочки и дома.',
        textbody1: ' Сидеть надоело мне лапы сложа,'+
                 ' я очень хотел бы пойти в сторожа!',
        textbody2: ' Висит объявление у наших ворот: собака нужна сторожить огород!',
        textbody3: ' Я тявкать умею, умею рычать, умею своих от чужих отличать! *'         
      }

      return (
        <> 
          <br/>
          <Container>
            <Row>
              <Col>               
                 <Detimage avatar={info.avatar} /> 
              </Col>
              <Col>
                <Details name={info.name} textbody1={info.textbody1} textbody2={info.textbody2} textbody3={info.textbody3} />
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <br/><Link to='/'>ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</Link><br/>
              </Col>
              <Col>
              </Col>
              <Col>
                <br/><Link to='/travel'>НА СЛЕДУЮЩУЮ СТРАНИЦУ</Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default ServicePage; 