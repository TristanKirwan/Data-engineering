import { USE_PHONE_A_FRIEND, USE_FIFTY_FIFTY, USE_ASK_THE_AUDIENCE,USE_SKIP_QUESTION } from './types'
// This is where you write your functions that deal with global state. 
// The function has a name and must always return a function that takes a dispatch.
// To fill the global state (reducer) you have to return a dispatch that contains a type (name of fuction that gets checked on switch in the reducer), and a payload (the actual data that you're using such as item ids).
// The reducer has a switch that checks for the type and does something with the payload you send along (changes state in reducer)

export function usePhoneAFriend(){
    return function(dispatch){
        dispatch({
            type: USE_PHONE_A_FRIEND,
            payload: true
        })
    }
}

export function useFiftyFifty(){
    return function(dispatch){
        dispatch({
            type: USE_FIFTY_FIFTY,
            payload: true
        })
    }
}

export function useAskTheAudience(){
    return function(dispatch){
        dispatch({
            type: USE_ASK_THE_AUDIENCE,
            payload: true
        })
    }
}

export function useSkipQuestion(){
    return function(dispatch){
        dispatch({
            type: USE_SKIP_QUESTION,
            payload: true
        })
    }
}