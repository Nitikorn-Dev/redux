import { Fragment } from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "../state/action-creator";

import { actions } from "../state/reducers/reducer";

 const Counter = ()=> {
     const dispatch = useDispatch();
     const counter = useSelector((state)=>state);
    return (
        <>
        <h1>{counter}</h1>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
        </>
    )
}

export default Counter;