import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoPage from './features/todo/pages/TodoPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={TodoPage} />
      </Switch>
    </div>
  );
}

export default App;
