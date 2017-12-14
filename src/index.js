import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import QB from 'quickblox';

console.log(QB.version);

var CREDENTIALS = {
    appId: 65950,
    authKey: 'dzzgACdfghpw8AG',
    authSecret: '8xDksQXGYFDXyn5'
};
QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
