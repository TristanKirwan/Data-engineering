import React, { useState} from 'react'

import dlv from 'dlv';

import scoreJson from '../../scores.json'

import './finalScreen.scss'
import { CLIENT_RENEG_WINDOW } from 'tls';

interface IProps {
    score: number
}

function FinalScreen(props: IProps){
    const score = dlv(props, 'score', 0)
    const scoreText = dlv(scoreJson.scores[score], 'title', '');
    // score = scoreJson[score]

    return(
        <div className="container">
            <div className="textWrapper">
                <h1 className="title"> You are a... </h1>
            </div>
            <div className="scoreboardWrapper">
                <span> {scoreText} </span>
            </div>
        </div>
    )
}

export default FinalScreen
