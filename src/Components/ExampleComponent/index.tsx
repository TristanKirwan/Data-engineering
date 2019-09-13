import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import the functions that you will use in this component
import { fetchPosts } from '../../actions/postActions'

//Declare the types of the state variables
interface IState {
    posts: any
}
//Declare the types of the props.
interface IProps{
    fetchPosts: Function
    posts: {id: number, title:string, body:string}[]
}

class Posts extends Component<IProps, IState>{
    componentWillMount(){
        this.props.fetchPosts();
    }

    render(){
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))  
        console.log(this.props)
        return(
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

// Here you declare what the value of props become. Here we say that the props is equal to the state(global store). example (name of the reducer in which the variable is that we want to assign our props to) .items(name of the variable in the state of the reducer that we assign to our prop 'posts')
const mapStateToProps = (state:any) => ({
    posts: state.example.items
})

// The syntax when exporting a component that has to be connected to redux is as follows:
// export default connect(mapStateToProps, { name_of_functions_we_use})(name_of_component)
export default connect(mapStateToProps, { fetchPosts })(Posts)