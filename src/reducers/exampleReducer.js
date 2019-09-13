import { FETCH_POSTS} from '../actions/types'

//This is comparable to state inside a class component in react. We set the initial state here.
const initialState = {
    items: [],
    item: {},
}


// The reducer gets called with a dispatch, this dispath contains a type and the data that is of interest.
// The reducer checks the type on a switch and changes the state of the reducer according to the payload (data)
export default function(state = initialState, action){
    switch(action.type){

        case FETCH_POSTS:
            return{
                ...state,
                items: action.payload
            }

        default:
            return state;
    }
}