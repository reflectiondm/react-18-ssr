import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { ProductDetailPage } from './pages/ProductDetailsPage';
import { globals } from './global-style';

const App = () => {
    return (
        <div className={globals}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/pdp/:sku" element={<ProductDetailPage />} />
            </Routes>
        </div>
    );
};

export default App;
