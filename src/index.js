import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import './index.css';
import Contextt from './components/Contextt';

ReactDOM.render(
<React.StrictMode>
    <Contextt>
        <App/>
    </Contextt>
</React.StrictMode>
,document.getElementById("root"));
