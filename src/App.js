
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import AddProduct from './Components/AddProduct';
import GetProduct from './Components/GetProduct';
import Header from './Components/Header';
function App() {
  return (
    <>
      <Container>
      <Row>
        <Header/>
      </Row>
        <Row>
          <Col>
            <AddProduct />
          </Col>
          <Col>
            <GetProduct />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
