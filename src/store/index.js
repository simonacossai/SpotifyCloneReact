import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import homepageReducer from '../reducers/homepage'
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
  homepage:{
    firstrow:[],
    secondrow:[],
    thirdrow:[],
  }
};

const bigReducer = combineReducers({homepage: homepageReducer})

export default function configureStore() {
  return createStore(bigReducer, initialState, composedEnhancer(applyMiddleware(thunk)))
}
