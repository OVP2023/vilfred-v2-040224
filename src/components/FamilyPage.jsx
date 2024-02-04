import { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




import Details from './Details'

function FamilyPage() {
      const [data, setData] = useState(localStorage.getItem('data'));
    
      const info = {
        avatar:"https://i.ibb.co/7NKtfWj/2.jpg",
        id:10,
        name:"Родословная самой красивой и справедливой собаки на свете ",
        textbody1:'Итак, Вильфред это моё второе имя, первое, которое не очень мне нравится: Чиппи.',
        textbody2:' Давным давно немецкие цвергшпицы Уайд фэри фейс (Милашка) и Винсента Лоурель родили мою бабушку царевну Данелию,'+ 
                  ' а в это же время юный чемпион Молдавии и Румынии Миракл Фром Мираклс (Котя) и Трули Хеппи с Авеню родили'+
                  ' моего прекрасного дедушку Грейт Вандефул Джой (Джой великолепный).'+
                  ' От Джоя великолепного и царевны Данелия родился мой папаша Черри Блоссом (изящный цветок Вишни).',
        textbody3:' По линии мамочки моими пра были Whats Dreams R Made of (Мечтатель) и Звёздное сияние с одной стороны,'+
                  ' и Леонард Нельсон (Пират) и некая Риджина Рейч с другой стороны.'+
                  ' Моя мамочка была абсолютной чемпионкой небольших прекрасных стран Белорусии,Сербии и ЧерногорииФей Флорес (Фея).'
      
      }    
      
      return (
        <> 
          <br/>
          <Container >
            <Row className="container-xxl">
              <Col>
                <img src="https://i.ibb.co/7NKtfWj/2.jpg" className="card-img-top" alt=""></img>
                
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
                <br/><Link to='/puppy'>НА СЛЕДУЮЩУЮ СТРАНИЦУ</Link><br/>
              </Col>
            </Row>
          </Container>

        </>
      )
  }


  export default FamilyPage;  
  