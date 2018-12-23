import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Resources/css/app.css';
import './index.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();