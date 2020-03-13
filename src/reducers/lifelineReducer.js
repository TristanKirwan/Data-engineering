import { USE_PHONE_A_FRIEND, USE_FIFTY_FIFTY, USE_ASK_THE_AUDIENCE,USE_SKIP_QUESTION } from '../actions/types'

//This is comparable to state inside a class component in react. We set the initial state here.
const initialState = {
    usedAskTheAudience: false,
    usedPhoneAFriend: false,
    usedFiftyFifty: false,
    usedSkipQuestion: false
}


// The reducer gets called with a dispatch, this dispath contains a type and the data that is of interest.
// The reducer checks the type on a switch and changes the state of the reducer according to the payload (data)
export default function(state = initialState, action){
    switch(action.type){

        case USE_PHONE_A_FRIEND:
            return{
                ...state,
                usedPhoneAFriend: action.payload
            }
        case USE_FIFTY_FIFTY:
            return{
                ...state,
                usedFiftyFifty: action.payload
            }
        case USE_ASK_THE_AUDIENCE:
            return{
                ...state,
                usedAskTheAudience: action.payload
            }
        case USE_SKIP_QUESTION:
            return{
                ...state,
                usedSkipQuestion: action.payload
            }
        default:
            return state;
    }
}