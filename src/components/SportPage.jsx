import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'

function SportPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)
      const info = {
        avatar:"https://i.ibb.co/KLC8T2m/3.jpg",
        id:10,
        name:" Спорт"
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
                <br/><Link to='/fazenda'>НА СЛЕДУЮЩУЮ СТРАНИЦУ</Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default SportPage;