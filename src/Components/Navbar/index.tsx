import React from 'react'
import './style.scss'

type NavbarState = {
    isOpen: boolean
}
export default class Navbar extends React.Component<{}, NavbarState> {
    constructor(props: any){
        super(props)
        this.state={
            isOpen: false
        }
    }

    render(){
        return (
            <div  className="nav">
                <ul className="nav-expanded">
                    <li><a href="#" className="p">Home</a></li>
                    <li><a href="#" className="p">Cards</a></li>
                    <li><a href="#" className="p">Decks</a></li>
                    <li><a href="#" className="p">Articles</a></li>
                    <li><a href="#" className="p">Register</a></li>
                    <li><a href="#" className="p">Login</a></li>
                </ul>
                <div className="nav-collapsed">
                    <i className="fas fa-bars" onClick={() => this.setState({isOpen: !this.state.isOpen})}></i>
                    {this.state.isOpen? 
                        <div className="nav-collapsed__menu">
                            <ul>
                                <li><a href="#" className="p">Home</a></li>
                                <li><a href="#" className="p">Cards</a></li>
                                <li><a href="#" className="p">Decks</a></li>
                                <li><a href="#" className="p">Articles</a></li>
                                <li><a href="#" className="p">Register</a></li>
                                <li><a href="#" className="p">Login</a></li>
                            </ul>
                        </div> : null}
                </div>
            </div>
        )}
}
