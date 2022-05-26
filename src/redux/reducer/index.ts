import { combineReducers, createStore } from "redux";
import { BookingReducer } from "./BookingReducer";

const reducers = combineReducers({
    booking: BookingReducer,
})

export default reducers;

export type State = ReturnType<typeof reducers>;