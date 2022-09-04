import React, { useState } from 'react'
import './CounterPage.css';
const CounterPage = () => {
    let [countNum, setCountNum] = useState(0);
    const onIncreamentCount = () => {
        setCountNum(countNum + 1);
    }
    const onDecreamentCount = () => {
        setCountNum(countNum - 1);
    }
    const onResetCount = () => {
        setCountNum(0);
    }
return(
    <div className='app'>
        <div class="count-div">
            <div className='count'>
                <h1>Count: {countNum}</h1>
            </div>
        </div>
        <button class="btn-increament" onClick={onIncreamentCount}>+</button>
        <button class="btn-decreament" onClick={onDecreamentCount}>-</button>
        <button class="btn-reset" onClick={onResetCount}>Reset</button>
    </div>
)
}
export default CounterPage;