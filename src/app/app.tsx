import React, { useState } from 'react';
import { styled } from '@linaria/react';

const Button = styled.button`
    height: 45px;
    border-radius: 2px;
    background-color: gray;
    color: white;
`;

const App = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        console.log('clicked', count);
        setCount(count + 1);
    };
    return (
        <main>
            <h1>Hello, world!</h1>
            <Button onClick={onClick}>Clicked ({count})</Button>
        </main>
    );
};

export default App;
