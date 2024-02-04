import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'

function HolidaysPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)
      const info = {
        avatar:"https://i.ibb.co/CVbxnD0/10.jpg",
        id:10,
        name:" Праздники, моя любимая страница, всегда накормят по высшему разряду!"
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
                <Details name={info.name} />
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
                <br/><Link to='/beauty'>НА СЛЕДУЮЩУЮ СТРАНИЦУ</Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default HolidaysPage;