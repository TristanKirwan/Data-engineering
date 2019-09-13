import React from 'react'
import BigCard from './BigCard'
import ExampleComponent from './ExampleComponent/'

export default function Home() {
    return (
            <div className="wrapper">
                <p>Start building your favourite decks today!</p>
                <div className="articles">
                    <ExampleComponent />
                    <BigCard/>
                    <BigCard type="secondary"/>
                </div>
            </div>
    )
}
