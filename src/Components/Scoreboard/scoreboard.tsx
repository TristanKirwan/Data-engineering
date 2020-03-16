import React, { useState } from 'react'

import dlv from 'dlv';
import classnames from 'classnames';

import scoreboardJson from '../../scores.json';

import './Scoreboard.scss';

type scoreboardJson = {
    title: string,
    id: number
}

function Scoreboard(props: {score: number}){
    const [fireworks, setFireworks] = useState(false);
    const score = dlv(props, 'score', 0)

    return(
        <div className="scoreboard">
            <div className="scoreboardContainer">
                <div className="scoreboardItems">
                    {scoreboardJson.scores.map((item: scoreboardJson, key: number) => {
                       return( <div className={classnames("text", item.id == score && "active")} key={key}>
                            <span> {item.title} </span> 
                        </div>
                       )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Scoreboard
