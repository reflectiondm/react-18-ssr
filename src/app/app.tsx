import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        console.log('clicked', count);
        setCount(count + 1);
    };
    return (
        <main>
            <h1>Hello, world! Oooh yeah</h1>
            <button onClick={onClick}>Clicked ({count})</button>
        </main>
    );
};

export default App;
