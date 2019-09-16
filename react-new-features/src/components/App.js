import React, { useState, useEffect } from 'react';

const App = (props) => {   
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('Use effect ran');
        document.title = count;
    }, [count])

    useEffect(() => {
        console.log('this should run only once');
    }, [])
    
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(props.count);
    }
    const changeText = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <p>The current {text || 'count'} is { count }</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>reset</button>
            <input value={text} onChange={changeText}/>
        </div>
    )
}

App.defaultProps = {
    count: 0
}