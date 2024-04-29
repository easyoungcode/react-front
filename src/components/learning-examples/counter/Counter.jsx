import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'
import CounterButton from './CounterButton'

// 우리가 변경하는 건 상태, view는 변경해주지 않음.
// Counter 컴포넌트를 counter에 연결시켜줌으로써 view가 변경되는 것
// 우리가 DOM을 변경하는 게 아닌, React가 변경사항을 파악해 DOM을 업데이트 하는 것

export default function Counter() {

    const [count, setCount] = useState(0)
    
    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0)
    }
    
    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} 
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} 
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}/>
            <button className="resetButton" 
                onClick={resetCounter}
            >Reset</button>
        </>
    )
}

