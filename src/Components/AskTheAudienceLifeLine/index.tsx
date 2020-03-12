import React, { useState, useEffect} from 'react'

import classnames from 'classnames';
import anime from 'animejs';

import './style.scss'


interface IProps {
    lifeLineNumbers: number[]
}

function AskTheAudienceLifeLineVisual(props: IProps){
    let multipleChoiceLetters = ["A", "B", "C", "D"]
    useEffect(() => animateAskTheAudience(props.lifeLineNumbers))
    return(
        <div className="ask-the-audience-container">
            <div className="container">
                <div className="row">
                    <div className="ask-the-audience-container__title">
                        What does the audience think?
                    </div>
                </div>
                    <div className="ask-the-audience-container__bars-container row">
                        {props.lifeLineNumbers.map((percentage: number, id: number) => {
                            return(
                            <div className={classnames("ask-the-audience-container__bars-container__answer", "col-3", `ask-the-audience-container__bars-container__answer--${id}`)} key={id}>
                                <div className="ask-the-audience-container__bars-container__answer__percentage-bar" style={{height: `${percentage}%`}}></div>
                                <span className="ask-the-audience-container__bars-container__answer__percentage">0</span>
                            </div>   
                            )
                        })}
                    </div>
                <div className="row">
                    {multipleChoiceLetters.map((letter: string, id: number) => {
                        return(
                            <span className="ask-the-audience-container__label col-3" key={id}>
                                {letter}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function animateAskTheAudience(lifeLineNumbers: number[]){
    let answers = document.getElementsByClassName("ask-the-audience-container__bars-container__answer__percentage-bar")
    let percentages = document.getElementsByClassName("ask-the-audience-container__bars-container__answer__percentage")
    let outerContainer = document.getElementsByClassName("ask-the-audience-container")
    var timeLine = anime.timeline({
        easing: 'linear',
    })
    timeLine.add({
        targets: outerContainer,
        translateY: ["calc(-100% + 200px)", "-50%"],
        translateX: ["-50%", "-50%"],
        scale: [0, 1],
        duration: 3000
    })
    for(let i = 0; i < answers.length; i ++){
        let percentageTarget = lifeLineNumbers[i]
        let data = { count: 0};
        let percentageHTMLElement = percentages[i] as HTMLElement
        timeLine.add({
            targets: answers[i],
            height: ['0%',  `${lifeLineNumbers[i]}%`],
            duration: (4000 / 100) * lifeLineNumbers[i]
        })
        timeLine.add({
            targets: data,
            count: [0, percentageTarget],
            round: 1,
            duration: (4000 / 100) * lifeLineNumbers[i],
            update: function(){
                percentageHTMLElement.innerText = data.count.toLocaleString()
            }
        }, `-=${(4000 / 100) * lifeLineNumbers[i]}`)
        timeLine.add({
            targets: percentageHTMLElement,
            opacity: 1,
            duration: 1,
        }, `-=${(4000 / 100) * lifeLineNumbers[i]}`)
    }
    timeLine.add({
        targets: outerContainer,
        translateY: ["-50%", "calc(-100% + 450px)"],
        translateX: ["-50%", "-50%"],
        scale: [1, 0.5],
        delay: 5000,
        duration: 3000
    })
}

export default AskTheAudienceLifeLineVisual