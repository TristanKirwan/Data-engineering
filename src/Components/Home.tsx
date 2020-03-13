import React, { useState } from 'react'
import Question from './Question/'
import FinalScreen from './FinalScreen/FinalScreen'

import questionData from '../questions.json'
import './style.scss'

export default function Home() {
    const [finalScreen, setFinalScreen] = useState(false);
    const [score, setScore] = useState(0);

    return (
            <div className="home">
                <div className="home__background">
                    <img className="home__background__image" src="https://www.thesun.co.uk/wp-content/uploads/2018/05/NINTCHDBPICT0004037735051.jpg"/>
                </div>
                <div className="home__question">
                    {finalScreen ? <FinalScreen score={score}/> : <Question questionData={questionData} setFinalScreen={setFinalScreen} setScore={setScore} score={score} />}
                </div>
            </div>
    )
}
