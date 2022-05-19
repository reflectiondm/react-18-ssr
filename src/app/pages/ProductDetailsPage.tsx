import React, { useState } from 'react';
import { styled } from '@linaria/react';

const ImageWrapper = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 2px;
    background-color: gray;
    color: white;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ProductDetailPage: React.FC = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        console.log('clicked', count);
        setCount(count + 1);
    };

    return (
        <div>
            <h1>This is the PDP</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a possimus eius in eveniet doloribus
                at illo omnis quod reiciendis cum, recusandae asperiores sed quos ullam totam nobis delectus dicta.
            </p>
            <ImageWrapper>
                <Image src="https://source.unsplash.com/random?furniture" />
            </ImageWrapper>
        </div>
    );
};
