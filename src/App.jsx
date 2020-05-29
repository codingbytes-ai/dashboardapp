import React from 'react';
import Router from './routes/Router.jsx'
import {Link} from 'react-router-dom'

import './styles/framework.css'

function App() {
    return (
        <div className="App">
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/health">Health</Link>
            </div>

            <Router />
        </div>
    );
}

export default App;
