import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import portfolio from './pages/portfolio';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Compétences" component={Knowledges} />
                    <Route path="/Portfolio" component={portfolio} />
                    <Route path="/Contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;