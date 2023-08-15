import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import QuestionsAndAnswerContainer from "./components/QuestionsAndAnswerContainer";
function App() {

  return (
    <div className="App">
      <Container className="p-5">
        
        <Row>
          <Col lg={4} xs={12} >
            <div className="m-3">
              أسئلة و أجوبة شائعة ؟
            </div>
          </Col>
          <Col lg={8} xs={12}>
            <QuestionsAndAnswerContainer />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
