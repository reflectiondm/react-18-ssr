import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../app/app';

hydrateRoot(document.getElementById('root'), <App />);
