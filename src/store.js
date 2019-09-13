import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/'

const initialState = {}

const middleware = [thunk]

//Only 1 store can be provided, but to logically split up the logic of the global state handled by redux we make multiple reducers and combine them in one (rootreducer that is made in reducer/index.js)
const store = createStore(
    rootReducer,
    initialState,
    //This allows the use of redux dev tools in chrome
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;