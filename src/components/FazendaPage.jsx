import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'

function FazendaPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
      console.log(data)
      const info = {
        avatar:"https://i.ibb.co/TrC5dcj/6m.jpg",
        id:10,
        name:" Фазенда (дача для не продвинутых)"
      }

      return (
        <> 
          <br/>
          <div className='container-fluid'>
            <Row>
              <Col>
                <Detimage avatar={info.avatar}/> 
              </Col>
              <Col>
                <Details name={info.name}/>
              </Col>
              <Col>
                <img src='https://i.ibb.co/yBqF9yd/2.jpg' className="card-img-top" alt=""></img>
                <div>На огороде</div>
                
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                <br/><Link to='/'>ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</Link><br/>
              </Col>
              <Col>
              </Col>
            </Row>

          </div>  

        </>
      )
  }


  export default FazendaPage;