import React from 'react'

export default function Bigcard(props) {
    return (
        <div className="BigCard">
            <div className="bigCardText">
                <h1>{props.cardTitle}</h1>
                <h3>{props.previewText}</h3>
                <p>{props.realText}</p>
                <ul>
                    <li><i class="fas fa-heart"></i> {props.amountLikes}</li>
                    <li><i class="fas fa-comment"></i>{props.amountComments}</li>
                </ul>
            </div>
            <img src={props.imgsrc} alt="Article image"></img>
        </div>
    )
}

Bigcard.defaultProps = {
    cardTitle: "Card Title",
    previewText: "This is the preview text that the card will show!",
    realText: "This is the 'real' text, it will be shown on the card and go more into detail of what the article actually contains.",
    amountLikes: 0,
    amountComments: 0,
    imgsrc: "../imgs/placeholder.png"
}
