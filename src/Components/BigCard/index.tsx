import React from 'react'
import './style.scss'

// Check ff op stage wat ze hier ook alweer zetten
declare var require: any

interface bigCardProps {
    title: string
    previewText: string
    realText: string
    imgsrc: string
    altText: string
    amountLikes: number
    amountComments: number
    type: string
}

export default class bigCard extends React.Component<bigCardProps> {
    static defaultProps: bigCardProps = {
        title: "Card Title",
        previewText: "This is the preview text that the card will show!",
        realText: "This is the 'real' text, it will be shown on the card and go more into detail of what the article actually contains.",
        imgsrc: "placeholder.png",
        altText: "alttext",
        amountLikes: 0,
        amountComments: 0,
        type: "primary"
    }
    render(){
        return (
            <div className={`bigCard bigCard--${this.props.type}`}>
                <div className="bigCard-left-container">
                    <div className="bigCard-left-container-text-container">
                        <p className="h1 bigCard-text-container__header">{this.props.title}</p>
                        <p className="h3 bigCard-text-container__preview">{this.props.previewText}</p>
                        <p className="bigCard-text-container__realtext">{this.props.realText}</p>
                    </div>
                    <ul className="bigCard-left-container-stats-container">
                        <li><i className="fas fa-heart"></i>{this.props.amountLikes}</li>
                        <li><i className="fas fa-comment"></i>{this.props.amountComments}</li>
                        <li onClick={() => alert('Hier moet een share functionaliteit komen')}><i className="fas fa-share-alt"></i>Share</li>
                    </ul>
                </div>
                <div className="bigCard-img-container">
                    <img src={require(`../../imgs/${this.props.imgsrc}`)} alt={this.props.altText}></img>
                </div>
            </div>
        )
    }
}
