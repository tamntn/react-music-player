import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import musicAnimation from './musicAnimation';

ReactDOM.render(<App />, document.getElementById('hook'));
registerServiceWorker();
musicAnimation();
