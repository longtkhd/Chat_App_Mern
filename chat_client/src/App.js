import React, { Suspense, lazy }  from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from './history'
// import './App.css';

const Join = lazy(() => import('./components/join'))
const Chat = lazy(() => import('./components/chat'))

const App = () => {
  return (
    <Router history = {history}>
      <Suspense fallback={<h1>loading</h1>} >
        <Switch>
          <Route exact path="/join" component={Join} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
