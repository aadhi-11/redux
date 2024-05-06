import React from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const value = useSelector((state) => {
        return state.value
    })
    const dispatch = useDispatch()

    console.log(value);
    return (
        <div>
            <div onClick={() => {
                dispatch({
                    type: 'decrement'
                })
            }}
                style={{cursor:'pointer'}} 
            >
                Decrement
            </div>
            <div>
                {value}
            </div>
            <div onClick={() => {
                dispatch({
                    type: 'increment'
                })
            }} 
            style={{cursor:'pointer'}} 

            >
                Increment
            </div>
        </div>
    )
}

export default Counter