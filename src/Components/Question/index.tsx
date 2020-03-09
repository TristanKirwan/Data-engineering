import React, { useState } from 'react'
import classnames from 'classnames'


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
                <span className={classnames("question__lifelines-container__lifeline", fiftyFifty && "question__lifelines-container__lifeline--disabled")} onClick={() => setFiftyFifty(true)}>
                    <span className="question__lifelines-container__lifeline__icon-container">50/50</span>
                </span>
                <span className="question__lifelines-container__lifeline">
                    <span className="question__lifelines-container__lifeline__icon-container"><i className="fas fa-phone"></i></span>
                </span>
                <span className="question__lifelines-container__lifeline">
                    <span className="question__lifelines-container__lifeline__icon-container"><i className="fas fa-users"></i></span>
                </span>
                <span className="question__lifelines-container__lifeline">
                    <span className="question__lifelines-container__lifeline__icon-container"><i className="fas fa-arrow-right"></i></span>
                </span>
            </div>
            <div className="question__answers">
                {props.questiondata.answers.map((answer: QuestionAnswer, id: number) => {
                    let shouldHideOnFiftyFifty = fiftyFifty && props.questiondata.lifelines.fiftyFifty.includes(id)
                    return(
                        <div className="question__answers__answer-container">
                            {id % 2 === 0 ? <span className="question__answers__answer-container__horizontal-line"></span> : null}
                            <div key={id} className={classnames("question__answers__answer-container__answer",
                            shouldHideOnFiftyFifty && "question__answers__answer-container__answer--disabled")}
                            onClick={() => shouldHideOnFiftyFifty ? null : alert(`Your answer was: ${answer.correct}`)}>
                    <span className="question__answers__answer-container__answer__prefix">{multipleChoiceLetters[id]}: </span>{answer.text}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Question