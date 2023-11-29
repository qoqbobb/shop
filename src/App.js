import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from './img/bg.png'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './detail.js';

function App() {

  let [shoes] = useState(data);




  return (
    <div className="App">

     

    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to={"/detail"}>상세보기</Link>

      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg' style={{backgroundImage:'url('+bg+')'}}></div>
          <Container>
          <Row>
            {
              shoes.map((params,i)=>{
                return(
                  <Product shoes={shoes[i]} no={i+1}/>
                )
              })
            }
          </Row>
        </Container>
        </>
        }/>
        <Route path='/detail' element={<Detail></Detail>} />
      </Routes>



    </div>
  );
}
function Product (props) {
  return(
    <>
     <Col md={4}>
          <img src={process.env.PUBLIC_URL+'/shoes'+props.no+'.jpg'} width={"80%"}/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.title}</p>
      </Col>
    </>
  );
}

export default App;
