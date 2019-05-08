import { INCREMENT_TIME, DECREMENT_TIME, RESET } from '../actions/types';

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
                    if(state.session_time < 60){
                        return{
                            session_time: state.session_time + 1,
                            break_time: state.break_time
                        }
                    }else{
                        return state;  
                    }
                case 'break_time':
                    if(state.break_time < 60){
                        return{
                            break_time: state.break_time + 1,
                            session_time: state.session_time
                        }
                    }else{
                        return state;
                    }
                default:
                    return state;
            }
        case DECREMENT_TIME:
            switch(action.target){
                case 'work_time':
                    if(state.session_time > 1){
                        return{
                            session_time: state.session_time - 1,
                            break_time: state.break_time
                        }
                    }else{
                        return state;
                    }
                case 'break_time':
                    if(state.break_time > 1){
                        return{
                            break_time: state.break_time - 1,
                            session_time: state.session_time
                        }
                    }else{
                        return state;
                    }
                default:
                    return state;
            }
        case RESET:
            return{
                session_time: 25,
                break_time: 5
            }
        
        default:
            return state;
    }
})