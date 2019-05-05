import { INCREMENT_TIME, DECREMENT_TIME, START_TIMER, PAUSE_TIMER, RESET_TIMER } from './types';

export const incTime = (target) => dispatch =>{
    dispatch({
        type: INCREMENT_TIME,
        target: target
    })
}

export const decTime = (target) => dispatch =>{
    dispatch({
        type: DECREMENT_TIME,
        target: target
    })
}

export const startTimer = () => dispatch =>{
    return {
        type: START_TIMER
    }
}

export const pauseTimer = () => dispatch =>{
    return {
        type: PAUSE_TIMER
    }
}

export const resetTimer = () => dispatch =>{
    return {
        type: RESET_TIMER
    }
}