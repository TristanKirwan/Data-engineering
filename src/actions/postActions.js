import { FETCH_POSTS, NEW_POST} from './types'
// This is where you write your functions that deal with global state. 
// The function has a name and must always return a function that takes a dispatch.
// To fill the global state (reducer) you have to return a dispatch that contains a type (name of fuction that gets checked on switch in the reducer), and a payload (the actual data that you're using such as item ids).
// The reducer has a switch that checks for the type and does something with the payload you send along (changes state in reducer)

export function fetchPosts(){
    return function(dispatch){
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => dispatch({
            type: FETCH_POSTS,
            payload: post
        }))
    }
}