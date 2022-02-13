import {actions} from '../reducers/reducer';

interface incrementAction {
    type:typeof actions.INCREMENT,
    payload?:number

}


const increment = ():incrementAction=> {
    return {
        type:actions.INCREMENT,
    }
}


interface decrementAction {
    type:typeof actions.DECREMENT,
    payload?:number

}

const decrement = ():decrementAction=> {
    return {
        type:actions.DECREMENT,
    }
}

export {increment,decrement};