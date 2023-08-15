import React, { useContext } from 'react'
import { Col, Accordion, Button } from "react-bootstrap";
import { questionsContext } from './DataContextProvider';
import { ToastContainer } from 'react-toastify';

const Answers = () => {
    // 4
    const { dataQs, handleDelete } = useContext(questionsContext);
    
    return (
        <>
            <Col xs={12}>
                <ToastContainer/>
                {/* {dataQs.length > 0 ? (<> */}
                {localStorage.getItem("items") != null ? (<>

                    {/* dataQs.map((item) => { */}
                    {JSON.parse(localStorage.getItem("items")).map((item) => {
                        return (
                            <Accordion flush className='m-3  w-100' key={item.id}>
                                <Accordion.Item eventKey="1" >
                                    <Accordion.Header> {item.q}</Accordion.Header>
                                    <Accordion.Body>
                                        <div>

                                            {item.ans}
                                        </div>
                                        <Button variant="primary" type="submit" onClick={() => handleDelete(item.id)}>
                                            حذف
                                        </Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })
                    }

                </>) : (<div className='w-100 m-3'>لا يوجد اسئلة</div>)}

            </Col>
        </>
    )
}

export default Answers
