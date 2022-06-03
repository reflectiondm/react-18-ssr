import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@linaria/react';

const Button = styled.button`
    height: 45px;
    border-radius: 2px;
    background-color: gray;
    color: white;
`;

export const Homepage: React.FC = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        console.log('clicked', count);
        setCount(count + 1);
    };

    return (
        <div>
            <h1>This is the homepage</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a possimus eius in eveniet doloribus
                at illo omnis quod reiciendis cum, recusandae asperiores sed quos ullam totam nobis delectus dicta.
            </p>
            <Button onClick={onClick}>Clicked ({count})</Button>
            <Link to={'/pdp/123'}>Go to PDP</Link>
        </div>
    );
};

export default Homepage;
