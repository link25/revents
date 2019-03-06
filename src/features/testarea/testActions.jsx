import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants'

export const incrementcounter = () => {
    return{
        type: INCREMENT_COUNTER

    }
}

export const decrementcounter = () => {
    return{
        type: DECREMENT_COUNTER

    }
}