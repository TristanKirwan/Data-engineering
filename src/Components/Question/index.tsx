import React, { useState} from 'react'

import classnames from 'classnames';
import dlv from 'dlv';
import anime from 'animejs';

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
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isPending, setIsPending] = useState(false);

    let multipleChoiceLetters = ["A", "B", "C", "D"]
    //get random question here

    function nextQuestion () {
        const currentIndex = questions.indexOf(currentQuestion);
        questions.splice(currentIndex, 1);
        setHasAnswered(false);
        
        if(questions.length){
            setCurrentQuestion(questions[Math.floor(Math.random() * (questions.length - 1))]);
        }
        else {
            props.setFinalScreen(true);
        }
    }


    anime({
        targets: '.flashing',
        keyframes: [
          {backgroundColor: '#013392'},
          {backgroundColor: '#5e80c1'}
        ],
        duration: 2000,
        loop: true
      });

    return(
        <div className="question">
            <div className="position-relative d-flex justify-content-center align-items-center">
                <span className="question__horizontal-line"></span>
                <div className="question__header">{currentQuestion.question}</div>
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

                {currentQuestion.answers.map((answer: QuestionAnswer, id: number) => {
                    let shouldHideOnFiftyFity = fiftyFifty && currentQuestion.lifelines.fiftyFifty.includes(id)
                    return(
                        <div key={id} className="question__answers__answer-container">
                            {id % 2 === 0 ? <span className="question__answers__answer-container__horizontal-line"></span> : null}
                            <div id={`${id}`} className={classnames("question__answers__answer-container__answer", hasAnswered && `${answer.correct}`, isPending && "flashing", shouldHideOnFiftyFifty && "question__answers__answer-container__answer--disabled")} onClick={() => correctAnswers(answer.correct, id)}>
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
        //get html element and add a class     
        setIsPending(true);

        setTimeout(() => {
            setIsPending(false);
            setHasAnswered(true);
        }, 2000)
        
        setTimeout(() => {
            nextQuestion();
        }, 3000);
    }
}

export default Question
