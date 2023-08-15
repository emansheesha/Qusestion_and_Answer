import React, { useContext, useState } from 'react'
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { questionsContext } from './DataContextProvider';
import Notify from './Notify';
import { ToastContainer } from 'react-toastify';
const Questions = () => {
    const [qes, setQes] = useState('');
    const [ans, setAns] = useState('');
    const { handleAddData } = useContext(questionsContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (qes != '' && ans != '') {
            const item = { id: Math.floor(Math.random() * 100), q: qes, ans }
            handleAddData(item);
            Notify('تم الاضافه')
            setQes('');
            setAns('')
        }
        else {
            Notify('ادخل نص صحيح')
            return;
        }

    }
    return (
        <>
            <ToastContainer />
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4} xs={12}>
                        <Form.Group  >
                            <Form.Control type="text" placeholder="أدخل السؤال " className="m-3 w-100"
                                value={qes} onChange={(e) => setQes(e.target.value)} />

                        </Form.Group>
                    </Col>
                    <Col lg={4} xs={12}>
                        <Form.Group  >
                            <Form.Control type="text" placeholder="أدخل الاجابة " className="m-3 w-100"
                                value={ans} onChange={(e) => setAns(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col lg={4} xs={12}>
                        <Button variant="primary" type="submit" className="m-3  w-100">
                            ارسال 
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Questions
