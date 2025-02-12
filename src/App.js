import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);

        // Sentry 테스트를 위한 에러 발생
        if (newCount === 5) {
            throw new Error("This is a test error for Sentry!");
        }
    };

    return (
        <div className="app">
            <h1>PWA Test App</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>
                Increment
            </button>
            <p className="info">Click 5 times to test Sentry error reporting</p>
        </div>
    );
}

export default App;