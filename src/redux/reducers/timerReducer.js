import { INCREMENT_TIME, DECREMENT_TIME } from '../actions/types';

const initialState = {
    session_time: 25,
    break_time: 5,
    current_category: 'Session',
    current_time: 25,
    isRunning: false
};

export default ((state=initialState, action)=>{
    switch(action.type){
        case INCREMENT_TIME:
            switch(action.target){
                case 'work_time':
                    return{
                        session_time: state.session_time + 1,
                        break_time: state.break_time
                    }
                case 'break_time':
                    return{
                        break_time: state.break_time + 1,
                        session_time: state.session_time
                    }
                default:
                    return state
            }
        case DECREMENT_TIME:
            switch(action.target){
                case 'work_time':
                    return{
                        session_time: state.session_time - 1,
                        break_time: state.break_time
                    }
                case 'break_time':
                    return{
                        break_time: state.break_time - 1,
                        session_time: state.session_time
                    }
                default:
                    return state;
            }
        
        default:
            return state;
    }
})