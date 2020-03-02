import React, { useState} from 'react'
import dlv from 'dlv';

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
type question = {
    question: string,
    answers: QuestionAnswer [],
    lifelines: LifeLineInformation
}
type questionData =  {
    questions: question []
}

interface IProps {
    questionData: questionData,
    setFinalScreen: Function
}

function Question(props: IProps){
    const questions = dlv(props.questionData, 'questions', '');

    const [fiftyFifty, setFiftyFifty] = useState(false)
    const [phoneAFriend, setPhoneAFriend] = useState(false)
    const [askTheAudience, setAskTheAudience] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(questions[0])

    let multipleChoiceLetters = ["A", "B", "C", "D"]
    //get random question here

    function nextQuestion () {
        const currentIndex = questions.indexOf(currentQuestion);
        questions.splice(currentIndex, 1);
        
        if(questions.length){
            setCurrentQuestion(questions[Math.floor(Math.random() * (questions.length - 1))]);
        }
        else {
            props.setFinalScreen(true);
        }
    }

    return(
        <div className="question">
            <div className="position-relative d-flex justify-content-center align-items-center">
                <span className="question__horizontal-line"></span>
                <div className="question__header">{currentQuestion.question}</div>
            </div>
            <div className="question__lifelines-container">
                <span className="question__lifelines-container__lifeline" onClick={() => setFiftyFifty(true)}>50/50</span>
                <span className="question__lifelines-container__lifeline">Phone a friend</span>
                <span className="question__lifelines-container__lifeline">Ask the audience</span>
                <span className="question__lifelines-container__lifeline">Skip question</span>
            </div>
            <div className="question__answers">
                {currentQuestion.answers.map((answer: QuestionAnswer, id: number) => {
                    let shouldHideOnFiftyFity = fiftyFifty && currentQuestion.lifelines.fiftyFifty.includes(id)
                    return(
                        <div key={id} className="question__answers__answer-container">
                            {id % 2 == 0 ? <span className="question__answers__answer-container__horizontal-line"></span> : null}
                            <div id={`${id}`} className="question__answers__answer-container__answer" onClick={() => correctAnswers(answer.correct, id)}>
                                <span className="question__answers__answer-container__answer__prefix">{multipleChoiceLetters[id]}: </span>{answer.text}
                                {shouldHideOnFiftyFity && 
                                <span>
                                    Deleted by 50/50
                                </span>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

    function correctAnswers(answer: boolean, id: number) {
        const element: HTMLElement = document.getElementById(`${id}`)!;
        
        element.classList.add(`${answer}`);
        nextQuestion();
    }
}

export default Question
