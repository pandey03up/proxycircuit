import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Authentication from './components/Authentication'
import Todos from './components/TODO/All Todos/Todos';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path = '/' exact component = {Authentication} />
        <Route path = '/todos' exact component = {Todos} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
