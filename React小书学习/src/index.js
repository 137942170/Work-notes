import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexClock from './Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndexClock />, document.getElementById('root'));
registerServiceWorker();
