import React from 'react'
import{ Alternative, QBox} from '../QuestionBox/style.js'


export default function QuestionBox({
    question,
    // answerClicked,
    // choiceOption,

}){
    const {title, alternatives} = question
    return(
        <QBox>
        <h1>{title}</h1>
        <ul>{alternatives.map((alt,i) =>{
                return(
                <Alternative key={i} >
                    {alt}
                </Alternative>
                )
            })}
        </ul>

        
        </QBox>
    )
}