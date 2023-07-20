import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from "./constants"

import { SET_TEXT } from "./constants"
import { SET_COUNTER } from "./constants"


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const setTextAction = (text) => ({
    type: SET_TEXT,
    payload: text
})

export const setCounterAction = (number) => ({
    type: SET_COUNTER,
    payload: number+1
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error }))
}



