import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from "./constants"
import { SET_TEXT } from "./constants"
import { SET_COUNTER } from "./constants"


const initialStateSearch = {
    searchField: '',
    setText:'',
    counter:0
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default: 
        return state;    
    }
} 

export const setTextReducer = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case SET_TEXT:
            return Object.assign({}, state, {setText: action.payload});
        default: 
        return state;    
    }
} 

export const setCounterReducer = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case SET_COUNTER:
            return Object.assign({}, state, {counter: action.payload});
        default: 
        return state;    
    }
} 

const initialStateRobots= {
    isPending: false ,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default: 
        return state;    
    }
} 
