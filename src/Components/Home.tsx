import React from 'react'
import BigCard from './BigCard'

export default function Home() {
    return (
            <div className="wrapper">
                <p>Start building your favourite decks today!</p>
                <div className="articles">
                    <BigCard/>
                    <BigCard type="secondary"/>
                </div>
            </div>
    )
}
