import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ResumePage } from './Components';
import './i18n';

const isResumeView = new URLSearchParams(window.location.search).get('view') === 'cv';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>{isResumeView ? <ResumePage /> : <App />}</React.StrictMode>);
