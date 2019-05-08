import { INCREMENT_TIME, DECREMENT_TIME, RESET } from './types';

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

export const resetTimes = () => dispatch =>{
    dispatch({
        type: RESET
    })
}