import React, { useEffect} from 'react'
import anime from 'animejs'
import './style.scss'

interface IProps { 
    startGameFunction: Function
}

function StartScreen(props: IProps){
    useEffect(() => animateStartScreen(),[])
    return(
        <div className="startscreen" id="startscreen">
            <div className="container">
                <div className="startscreen__content-container" id="startscreen__content-container">
                    <div className="startscreen__content-container__fake-border-container startscreen__content-container__fake-border-container--top">
                        <span className="startscreen__content-container__fake-border-container__border startscreen__content-container__fake-border-container__border--top"></span>
                    </div>
                    <div className="startscreen__content-container__fake-border-container startscreen__content-container__fake-border-container--right">
                        <span className="startscreen__content-container__fake-border-container__border startscreen__content-container__fake-border-container__border--right"></span>
                    </div>
                    <div className="startscreen__content-container__fake-border-container startscreen__content-container__fake-border-container--bottom">
                        <span className="startscreen__content-container__fake-border-container__border startscreen__content-container__fake-border-container__border--bottom"></span>
                    </div>
                    <div className="startscreen__content-container__fake-border-container startscreen__content-container__fake-border-container--left">
                        <span className="startscreen__content-container__fake-border-container__border startscreen__content-container__fake-border-container__border--left"></span>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="startscreen__content-container__text-container">
                                <h1 className="startscreen__content-container__text-container__header">So you want to be a millionaire? </h1>
                                <p className="startscreen__content-container__text-container__text">
                                    In this game you will have to answer questions that are related to BIM and GIS. Each question is a multiple choice question with 4 options, answering correctly advances you to a higher level.<br />
                                    The game does not have a time limit on the questions, so you get the time to think about the answers. Answering incorrectly ends your game.<br /><br />
                                    To help you get to the highest possible rank of knowledge, you get some lifelines. You can only use these lifelines once in your game with a maximum of one lifeline per round. <br /> <br />
                                    <b>50/50:</b> Eliminates 2 of the possible answers, the other 2 remain. <br />
                                    <b>Phone a Friend:</b> You phone your friend and ask him/her the question. He/she responds with what they think the answer might be. Be careful though, your friends won't always know the correct answer! <br />
                                    <b>Ask the audience:</b> The audience vote for what they think the answer is, and these votes are visualized in a bar chart. Ofcourse the audience might not be as smart as you!<br />
                                    <b>Skip Question:</b> This lifeline allows you to skip this question without losing this round.
                                </p>
                            </div>
                        </div>
                        <div className="col-4 offset-4">
                            <div className="startscreen__content-container__button-container">
                                <button className="startscreen__content-container__button-container__button" onClick={() => props.startGameFunction(true)}>
                                    Start Game.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function animateStartScreen(){
    let startScreen = document.getElementById("startscreen")
    let topBorder = document.querySelector(".startscreen__content-container__fake-border-container__border--top")
    let leftBorder = document.querySelector(".startscreen__content-container__fake-border-container__border--left")
    let bottomBorder = document.querySelector(".startscreen__content-container__fake-border-container__border--bottom")
    let rightBorder = document.querySelector(".startscreen__content-container__fake-border-container__border--right")
    let textContainer = document.querySelector(".startscreen__content-container__text-container")
    let headerText = document.querySelector(".startscreen__content-container__text-container__header") as HTMLElement
    headerText.innerHTML = headerText.textContent!.replace(/\S/g, "<span class='startscreen__content-container__text-container__header__letter'>$&</span>")
    let paragraphText = document.querySelector(".startscreen__content-container__text-container__text") 
    let buttonElement = document.querySelector(".startscreen__content-container__button-container__button") 

    var timeLine = anime.timeline({})
    timeLine.add({
        targets: startScreen,
        padding: ["0px 0px", "15px 0px"],
        duration: 1000,
        easing: 'linear',
    })
    timeLine.add({
        targets: startScreen,
        maxHeight: ["0px", "1000px"],
        duration: 3000,
        easing: 'easeInBounce'
    })
    timeLine.add({
        targets: topBorder,
        translateX: ["-100%", "0%"],
        duration: 750,
        easing: 'linear'
    })
    timeLine.add({
        targets: rightBorder,
        translateY: ["-100%", "0%"],
        duration: 750,
        easing: 'linear'
    })
    timeLine.add({
        targets: bottomBorder,
        translateX: ["100%", "0%"],
        duration: 750,
        easing: 'linear'
    })
    timeLine.add({
        targets: leftBorder,
        translateY: ["100%", "0%"],
        duration: 750,
        easing: 'linear'
    })
    timeLine.add({
        targets: textContainer,
        scale: [0, 1],
        duration: 1,
    })
    timeLine.add({
        targets: headerText,
        opacity: [0, 1],
        duration: 1
    })
    timeLine.add({
        targets: headerText,
        scale: [0, 1],
        easing: 'easeInBounce'
    })
    timeLine.add({
        targets: ".startscreen__content-container__text-container__header__letter",
        scale: [4,1],
        opacity: [0,1],
        easing: "easeInOutBack",
        duration: 250,
        delay: (el, i) => 30*i
    })
    timeLine.add({
        targets: paragraphText,
        opacity: [0,1],
        duration: 1000,
        easing: 'linear'
    })
    timeLine.add({
        targets: buttonElement,
        scale: [0, 1],
        duration: 500,
        easing: 'linear'
    })
}

export default StartScreen
