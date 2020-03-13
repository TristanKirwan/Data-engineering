import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'
import lifelinesReducer from './lifelineReducer'

//This is where are reducers are contained


export default combineReducers({
    //The sytax is: 
    //name of the state (accountstate, cartstate etc...): name of the recured that is imported above.
    example: exampleReducer,
    lifelines: lifelinesReducer
})