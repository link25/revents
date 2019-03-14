import { createReducer } from "../../app/common/util/reducerUtil";
import { ASYNC_ACTIONS_START, ASYNC_ACTIONS_FINISH, ASYNC_ACTIONS_ERROR } from "./asyncConstants"

const initialState = {
    loading: false
}

export const asynActionStarted = (state) => {
    return {...state, loading: true}
}

export const asynActionFinished = (state) => {
    return {...state, loading: false}
} 

export const asynActionError = (state) => {
    return {...state, loading: false}
}

export default createReducer(initialState, {
    [ASYNC_ACTIONS_START]: asynActionStarted,
    [ASYNC_ACTIONS_FINISH]: asynActionFinished,
    [ASYNC_ACTIONS_ERROR]: asynActionError
})