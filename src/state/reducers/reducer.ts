import {} from 'redux'

export enum actions {
    INCREMENT = 'INCREMENT_ACTION',
    DECREMENT = 'DECREMENT_ACTION'
}

const initialValue = 0;

interface reducerType {
    type:actions;
    payload:typeof initialValue;
}


const reducer = (state = initialValue,action:reducerType)=> {
    switch(action.type){
        case actions.INCREMENT:
            return state +1;
        case actions.DECREMENT:
            return state -1;
        default:
            return state;
    }
}

export default reducer;