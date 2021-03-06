import React, { useState, useEffect} from 'react'

import { connect } from 'react-redux'
import { usePhoneAFriend, useAskTheAudience, useFiftyFifty, useSkipQuestion } from '../../actions/lifelineActions'
import classnames from 'classnames';
import dlv from 'dlv';
import anime from 'animejs';

import './style.scss'

import AskTheAudienceVisual from '../AskTheAudienceLifeLine';
import PhoneAFriendVisual from '../PhoneAFriendLifeLine';

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

interface LifeLineProps {
    usedAskTheAudience: boolean,
    usedPhoneAFriend: boolean,
    usedFiftyFifty: boolean,
    usedSkipQuestion: boolean
}
interface IProps {
    questionData: questionData,
    setFinalScreen: Function,
    setScore: Function,
    score: number,
    // Redux lifeline functions
    usePhoneAFriend: Function,
    useAskTheAudience: Function,
    useFiftyFifty: Function,
    useSkipQuestion: Function
}


function Question(props: IProps & LifeLineProps){
    const questions = dlv(props.questionData, 'questions', '');
    const [, updateState] = useState()
    //Lifelines
    const [fiftyFifty, setFiftyFifty] = useState(false)
    const [phoneAFriend, setPhoneAFriend] = useState(false)
    const [askTheAudience, setAskTheAudience] = useState(false)
    const [skipQuestion, setSkipQuestion] = useState(false)

    //Control vars
    const [currentQuestion, setCurrentQuestion] = useState(questions[0])
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isPending, setIsPending] = useState(false);

    //Lifeline control
    // const [usedAskTheAudienceThisRound, setShowAskTheAudience] = useState(false)
    const [showAskTheAudience, setShowAskTheAudience] = useState(false)
    const [usedPhoneAFriendThisRound, setUsedPhoneAFriendThisRound] = useState(false)
    const [usedFiftyFiftyThisRound, setUsedFiftyFiftyThisRound] = useState(false)
    const [usedAnyLifeLineThisRound, setUsedAnyLifeLineThisRound] = useState(false)
    let multipleChoiceLetters = ["A", "B", "C", "D"]

    const score = dlv(props, 'score', 0);
   
    
    //Set lifelines equal to the value in the store (so the player can't use the lifelines again)
    useEffect(() => {
        setAskTheAudience(props.usedAskTheAudience)
        setPhoneAFriend(props.usedPhoneAFriend)
        setFiftyFifty(props.usedFiftyFifty)
        setSkipQuestion(props.usedSkipQuestion)
    })



    //get random question here
    function nextQuestion () {
        const currentIndex = questions.indexOf(currentQuestion);
        questions.splice(currentIndex, 1);
        setHasAnswered(false);
        setUsedAnyLifeLineThisRound(false)

        if(questions.length){
            setCurrentQuestion(questions[Math.floor(Math.random() * (questions.length - 1))]);
        }
        else {
            props.setFinalScreen(true);
        }
    }

    const activateAskTheAudience = function(){
        setShowAskTheAudience(true)
        props.useAskTheAudience()
        setUsedAnyLifeLineThisRound(true)
        updateState({})
    }

    const activatePhoneAFriend = function(){
        setUsedPhoneAFriendThisRound(true)
        props.usePhoneAFriend()
        setUsedAnyLifeLineThisRound(true)
        updateState({})
    }
    const activateFiftyFifty = function(){
        setUsedFiftyFiftyThisRound(true)
        props.useFiftyFifty()
        setUsedAnyLifeLineThisRound(true)
        updateState({})
    }
    const activateSkipQuestion = function(){
        props.useSkipQuestion()
        setUsedAnyLifeLineThisRound(true)
        correctAnswers(true, 0)
        updateState({})
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

      //We use these vars to disable the onclick / change styling. You are only allowed to use each lifeline once, and only 1 lifeline per round.
      let isAllowedToUseFifyFifty = !(usedAnyLifeLineThisRound || fiftyFifty)
      let isAllowedToUseAskTheAudience = !(usedAnyLifeLineThisRound || askTheAudience)
      let isAllowedToPhoneAFriend = !(usedAnyLifeLineThisRound || phoneAFriend)
      let isAllowedToSkip = !(usedAnyLifeLineThisRound || skipQuestion)

      return(
          <div className="question">
            {/* The ask The audience lifeline is handled in a seperate component, if we used it this round we should show it, otherwise we dont. */}
            {showAskTheAudience && <AskTheAudienceVisual lifeLineNumbers={currentQuestion.lifelines.askTheAudience }/>}
            {usedPhoneAFriendThisRound && <PhoneAFriendVisual text={currentQuestion.lifelines.phoneAFriend} />}
            <div className="position-relative d-flex justify-content-center align-items-center">
                <span className="question__horizontal-line"></span>
                <div className="question__header">{currentQuestion.question}</div>
            </div>
            <div className="question__lifelines-container">
                <span className={classnames("question__lifelines-container__lifeline", usedAnyLifeLineThisRound && "question__lifelines-container__lifeline--disabled", fiftyFifty && "question__lifelines-container__lifeline--used")}
                 onClick={() => isAllowedToUseFifyFifty ? activateFiftyFifty() : null}>
                    <span className="question__lifelines-container__lifeline__icon-container">50/50</span>
                </span>
                <span className={classnames("question__lifelines-container__lifeline", usedAnyLifeLineThisRound && "question__lifelines-container__lifeline--disabled", phoneAFriend && "question__lifelines-container__lifeline--used")}
                 onClick={() => isAllowedToPhoneAFriend ? activatePhoneAFriend() : null}>
                    <span className="question__lifelines-container__lifeline__icon-container"><i className="fas fa-phone"></i></span>
                </span>
                <span className={classnames("question__lifelines-container__lifeline", usedAnyLifeLineThisRound && "question__lifelines-container__lifeline--disabled", askTheAudience && "question__lifelines-container__lifeline--used")}
                 onClick={() => isAllowedToUseAskTheAudience ? activateAskTheAudience() : null}>
                    <span className="question__lifelines-container__lifeline__icon-container"><i className="fas fa-users"></i></span>
                </span>
                <span className={classnames("question__lifelines-container__lifeline", usedAnyLifeLineThisRound && "question__lifelines-container__lifeline--disabled", skipQuestion && "question__lifelines-container__lifeline--used")}
                    onClick={() => isAllowedToSkip ? activateSkipQuestion() : null}>
                    <span className="question__lifelines-container__lifeline__icon-container"><i className="fas fa-arrow-right"></i></span>
                </span>
            </div>
            <div className="question__answers">

                {currentQuestion.answers.map((answer: QuestionAnswer, id: number) => {
                    let shouldHideOnFiftyFifty = fiftyFifty && currentQuestion.lifelines.fiftyFifty.includes(id) && usedFiftyFiftyThisRound
                    return(
                        <div key={id} className="question__answers__answer-container">
                            {id % 2 === 0 ? <span className="question__answers__answer-container__horizontal-line"></span> : null}
                            <div id={`${id}`} className={classnames("question__answers__answer-container__answer", hasAnswered && `${answer.correct}`, isPending && "flashing", shouldHideOnFiftyFifty && "question__answers__answer-container__answer--disabled")} onClick={() => correctAnswers(answer.correct, id)}>
                                <span className="question__answers__answer-container__answer__prefix">{multipleChoiceLetters[id]}: </span>{answer.text}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

    function correctAnswers(answer: boolean, id: number) {
        setHasAnswered(true);
        setShowAskTheAudience(false)
        setUsedFiftyFiftyThisRound(false)
        setUsedPhoneAFriendThisRound(false)
        if(answer) {
            props.setScore(score + 1)
        }
        else{
            props.setFinalScreen(true)
        }
        setTimeout(() => {
            nextQuestion();
        }, 3000);
    }
}

function mapStateToProps(state: any){
    return {
        usedAskTheAudience: state.lifelines.usedAskTheAudience,
        usedPhoneAFriend: state.lifelines.usedPhoneAFriend,
        usedFiftyFifty: state.lifelines.usedFiftyFifty,
        usedSkipQuestion: state.lifelines.usedSkipQuestion
    }
}

export default connect(mapStateToProps, { usePhoneAFriend, useAskTheAudience, useFiftyFifty, useSkipQuestion })(Question)
