import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'

function PuppyPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)

      const info = {
        avatar:"https://i.ibb.co/pjyZLWZ/12m.jpg",
        id:10,
        name:' Моё детство, как говорится ё-моё',
        textbody1:" У меня было хорошее детство, когда в 5 месяцев я встретил свою вторую мамочку.",
        textbody2: ' В это утро, очень рано соскочил щенок с дивана!',
        textbody3: ' Стал по комнатам ходить, прыгать, лаять, всех будить!*'
      }

      return (
        <> 
          <br/>
          <Container>
            <Row>
              <Col>
                <Detimage avatar={info.avatar}/>
              </Col>
              <Col>
                <Details name={info.name} textbody1={info.textbody1} textbody2={info.textbody2} textbody3={info.textbody3}/>
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
                <br/><Link to='/service'>НА СЛЕДУЮЩУЮ СТРАНИЦУ</Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default PuppyPage;  