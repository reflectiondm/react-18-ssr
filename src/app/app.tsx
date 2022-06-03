import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Homepage } from './pages/Homepage';
// import { ProductDetailPage } from './pages/ProductDetailsPage';
import { globals } from './global-style';

const Homepage = lazy(async () => {
    console.log('the Homepage data is being fetched');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('the Homepage is ready to render');
    return import('./pages/Homepage');
});
const ProductDetailPage = lazy(() => import('./pages/ProductDetailsPage'));

const App = () => {
    return (
        <div className={globals}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={'LOADING'}>
                            <Homepage />
                        </Suspense>
                    }
                />
                <Route
                    path="/pdp/:sku"
                    element={
                        <Suspense fallback={'LOADING'}>
                            <ProductDetailPage />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
