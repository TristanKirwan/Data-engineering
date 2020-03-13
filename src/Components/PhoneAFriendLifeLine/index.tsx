import React, {useEffect} from 'react'
import anime from 'animejs';

import './style.scss'


interface IProps {
    text: string
}

// We could add a phone sound & a 'loading screen' while Harold is picking up the phone if we have time.

function PhoneAfriendVisual(props: IProps){
    const Harold = require('./harold.jpg');
    useEffect(() => animatePhoneAFriend(),[])
    return(
        <div className="phone-a-friend-container">
            <div className="phone-a-friend-container__image-container">
                <img src={Harold} alt="Friend" className="phone-a-friend-container__image-container__image"></img>
            </div>
            <div className="phone-a-friend-container__text-container">
                <div className="phone-a-friend-container__text-container__waiting-text">
                    <span className="phone-a-friend-container__text-container__waiting-text__dot">.</span>
                    <span className="phone-a-friend-container__text-container__waiting-text__dot">.</span>
                    <span className="phone-a-friend-container__text-container__waiting-text__dot">.</span>
                </div>
                <div className="phone-a-friend-container__text-container__lifeline-text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

function animatePhoneAFriend(){
    let textWrapper = document.getElementsByClassName("phone-a-friend-container__text-container__lifeline-text")
    let textContainer = textWrapper[0] as HTMLElement
    // The ! asserts that is not null.
    textContainer.innerHTML = textContainer.textContent!.replace(/\S/g, "<span class='phone-a-friend-container__text-container__lifeline-text__letter'>$&</span>")
    var timeLine = anime.timeline({
    })
    timeLine.add({
        targets: ".phone-a-friend-container",
        width: ["0vw", "80vw"],
        easing: "linear",
        duration: 2000
    })
    timeLine.add({
        targets: ".phone-a-friend-container",
        height: ["5vh", "30vh"],
        easing: "linear",
        duration: 1500
    })
    timeLine.add({
        targets: ".phone-a-friend-container__text-container__waiting-text__dot",
        opacity: [0, 1],
        duration: 1,
    })
    timeLine.add({
        targets: ".phone-a-friend-container__text-container__waiting-text__dot",
        translateY: ["0px", "-50px", "0px"],
        duration: 350,
        loop: 4,
        easing: 'easeInOutBack',
        delay: (el, i) => 1000*i
    })
    timeLine.add({
        targets : '.phone-a-friend-container__text-container__waiting-text',
        opacity: [1, 0],
        duration: 1,
    })
    timeLine.add({
        targets : '.phone-a-friend-container__text-container__lifeline-text',
        opacity: [0, 1],
        duration: 1,
    })
    timeLine.add({
        targets: ".phone-a-friend-container__text-container__lifeline-text__letter",
        scale: [4,1],
        opacity: [0,1],
        easing: "easeInOutBack",
        duration: 250,
        delay: (el, i) => 30*i
    })
}

export default PhoneAfriendVisual