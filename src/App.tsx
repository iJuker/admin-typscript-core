import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from '../src/containers/Layout';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Layout} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
