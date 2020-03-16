import React, { useState } from 'react'
import Question from './Question/'
import FinalScreen from './FinalScreen/FinalScreen'
import StartScreen from './StartScreen'
import Scoreboard from './Scoreboard/scoreboard';

import questionData from '../questions.json'

import './style.scss'

export default function Home() {
    const [finalScreen, setFinalScreen] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);

    return (
            <div className="home">
                <div className="home__background">
                </div>
                { gameStarted ? <div className="home__question">
                    <Scoreboard score={score} />
                    {finalScreen ? <FinalScreen score={score}/> : <Question questionData={questionData} setFinalScreen={setFinalScreen} setScore={setScore} score={score} />}
                </div> : 
                    <StartScreen startGameFunction={setGameStarted}/>
                }
            </div>
    )
}
