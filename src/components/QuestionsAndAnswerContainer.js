import React, { useContext } from 'react'
import { Row, Button } from "react-bootstrap";
import Questions from './Questions';
import Answers from './Answers';
import { questionsContext } from './DataContextProvider';
const QuestionsAndAnswerContainer = () => {
    const { dataQs, handleDeleteAll } = useContext(questionsContext);

    return (
        <>

            <Row>
                <Questions />
            </Row>
            <Row>
                <Answers />
            </Row>
            {/* {dataQs.length > 0  */}
            {(localStorage.getItem('items') != null) ? (<Row className="m-3 w-100">

                <Button variant="primary" type="submit" onClick={handleDeleteAll}>
                    حذف الكل
                </Button>
            </Row>) : null}

        </>
    )
}

export default QuestionsAndAnswerContainer
