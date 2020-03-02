import React from 'react'
import Question from './Question/'

import {questionData} from '../questions'
import './style.scss'

export default function Home() {
    return (
            <div className="home">
                <div className="home__background"></div>
                <div className="home__question">
                    <Question questiondata={questionData.questions.bim[0]} />
                </div>
            </div>
    )
}
