import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
        // Sentry 테스트를 위한 에러 발생
        if (count === 5) {
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
        </div>
    );
}

export default App;