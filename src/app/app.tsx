import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { ProductDetailPage } from './pages/ProductDetailsPage';

const App = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        console.log('clicked', count);
        setCount(count + 1);
    };
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/pdp/:sku" element={<ProductDetailPage />} />
            </Routes>
        </main>
    );
};

export default App;
