import React from 'react'
import Question from './Question/'

import {questionData} from '../questions'
import './style.scss'

export default function Home() {
    return (
            <div className="home">
                <div className="home__background">
                    <img className="home__background__image" src="https://www.thesun.co.uk/wp-content/uploads/2018/05/NINTCHDBPICT0004037735051.jpg"/>
                </div>
                <div className="home__question">
                    <Question questiondata={questionData.questions.bim[0]} />
                </div>
            </div>
    )
}
