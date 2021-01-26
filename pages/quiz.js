import styled from 'styled-components'
import React, {useState, useEffect}from 'react'
import db from '../db.json';
import QuestionBox from '../src/components/QuestionBox'
import Container from '../src/components/Container'


export default function Quiz() {

    const [questions, setQuestions] = useState([])

    useEffect( ()=> {
        // traz json data.jason com questoes
        setQuestions(db.questions)
      }, [])
      

    return(
        <>
        <Container>
            <h1>Quiz APP</h1>
            {questions.map((question,i) => {

                return(
                    <QuestionBox
                    key={i}
                    question={question}
                    />
        
                )

            })}
        
        
        </Container>
    </>
    )
}