import React, { useState, useEffect} from 'react'

import dlv from 'dlv';
import anime from 'animejs';
import classnames from 'classnames';

import scoreJson from '../../scores.json'

import './finalScreen.scss'

interface IProps {
    score: number
}

function FinalScreen(props: IProps){
    const [fireworks, setFireworks] = useState(false);
    const score = dlv(props, 'score', 0)
    const scoreText = dlv(scoreJson.scores[score], 'title', '');
    
    useEffect(() => {
    
    anime({
        targets: '.millionaire',
        rotate: 3600,
        left: [-250, 1500],
        easing: 'easeInOutQuad',
        duration: 3000
    })

    setTimeout(() => {
        var timeline = anime.timeline({
            targets: '.scoreboardWrapper',
        });
    
        timeline.add({
            targets: '.scoreboardWrapper',
            height: 150,
            duration: 500,
            easing: 'linear',
        })
    
        timeline.add({
            targets: '.scoreboardWrapper',
            width: '30%',
            duration: 1250,
            easing: 'easeInOutQuad',
        }, 750)
    
        timeline.add({
            targets: '.scoreboardWrapper .title',
            opacity: 1,
            duration: 250
        }, 1750)
    
        timeline.add({
            targets: '.scoreboardWrapper',
            height: '60%',
            duration: 1100
        }, 2000)
    
        timeline.add({
            targets: '.scoreboardWrapper .scoreboard',
            height: 150,
            duration: 250
        }, 2250)
    
        timeline.add({
            targets: '.scoreboardWrapper .scoreboard',
            width: 150,
            duration: 250
        }, 2000)
    
        timeline.add({
            targets: '.scoreboardWrapper .scoreboard span',
            opacity: 1,
            duration: 250
        }, 2250)

        setTimeout(() => {
            setFireworks(true);
        }, 2500)
    }, 1000)

    }, [])

    return(
        <div className="finalScreenContainer">
            <div className="millionaire" />
            <div className={classnames("scoreboardWrapper", fireworks && "pyro")}>
                <div className="before" />
                <div className="after"/>
                <h1 className="title"> You are a... </h1>
                <div className="scoreboard">
                    <span> {scoreText} </span>
                </div>
            </div>
        </div>
    )
}

export default FinalScreen
