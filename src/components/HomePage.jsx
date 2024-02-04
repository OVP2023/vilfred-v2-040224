import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Details'
import Detimage from './Detimage'

function HomePage() {
    //выгрузка записей с сервера 
    const [data, setData] = useState(1);      
    localStorage.data=data

    const info = {
      avatar:"https://i.ibb.co/2tzhjnB/ani.gif",
      avatarR:"https://i.ibb.co/vZQRxt1/7m.jpg",
      id:10,
      name:'   Привет всем! Hello world!',
      textbody1:' Друзья мои! Вы еще не знаете как вам повезло! ',
      textbody2:' Вы можете познакомиться со мной: самой умной и красивой, а главное очень справедливой собакой в мире!',
      textbody3:' Посвещаю эти веб странички на React JSX и Вootstrap моей второй маме - самой лучшей и заботливой мамочке на свете! '  
    }
    //i.ibb.co/kQPQFhw/4m.jpg


    return (
          <>  
            <br/>
            <div className='container-fluid'>
              <div className="row row-cols-4">
                <div className="Col col-3">
                  <Detimage avatar={info.avatar}/> 
                </div>
                <div className="Col col-6">
                  <Details name={info.name} textbody1={info.textbody1} textbody2={info.textbody2} textbody3={info.textbody3}/>
                </div>
                <div className="Col col-2">
                  <Detimage avatar={info.avatarR}/> 
                </div>
              </div>
              <br/>
              <Row>
                <Col>   
                </Col>
                <Col>
                </Col>
                <Col>
                  <br/><Link to='/family'>НА СЛЕДУЮЩУЮ СТРАНИЦУ</Link><br/>
                </Col>
              </Row>
            </div>

          </>
      )

  }


export default HomePage;