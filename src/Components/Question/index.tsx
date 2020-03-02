import React, { useState } from 'react'

import './style.scss'

type QuestionAnswer = {
    text: string,
    correct: boolean
}
type LifeLineInformation = {
    fiftyFifty: number[],
    phoneAFriend: string,
    askTheAudience: number[]
}
type QuestionData =  {
    question: string,
    answers: QuestionAnswer [],
    lifelines: LifeLineInformation
}

interface IProps {
    questiondata: QuestionData
}

function Question(props: IProps){
    const [fiftyFifty, setFiftyFifty] = useState(false)
    const [phoneAFriend, setPhoneAFriend] = useState(false)
    const [askTheAudience, setAskTheAudience] = useState(false)
    let multipleChoiceLetters = ["A", "B", "C", "D"]
    return(
        <div className="question">
            <div className="position-relative d-flex justify-content-center align-items-center">
                <span className="question__horizontal-line"></span>
                <div className="question__header">{props.questiondata.question}</div>
            </div>
            <div className="question__lifelines-container">
                <span className="question__lifelines-container__lifeline" onClick={() => setFiftyFifty(true)}>50/50</span>
                <span className="question__lifelines-container__lifeline">Phone a friend</span>
                <span className="question__lifelines-container__lifeline">Ask the audience</span>
                <span className="question__lifelines-container__lifeline">Skip question</span>
            </div>
            <div className="question__answers">
                {props.questiondata.answers.map((answer: QuestionAnswer, id: number) => {
                    let shouldHideOnFiftyFity = fiftyFifty && props.questiondata.lifelines.fiftyFifty.includes(id)
                    return(
                        <div className="question__answers__answer-container">
                            {id % 2 == 0 ? <span className="question__answers__answer-container__horizontal-line"></span> : null}
                            <div key={id} className="question__answers__answer-container__answer" onClick={() => alert(`Your answer was: ${answer.correct}`)}>
                    <span className="question__answers__answer-container__answer__prefix">{multipleChoiceLetters[id]}: </span>{answer.text}
                            {shouldHideOnFiftyFity && <span>Deleted by 50/50</span>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Question