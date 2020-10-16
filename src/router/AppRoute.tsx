import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'views';
import { Paths } from './constants';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Paths.main} component={Main} />
        <Route component={() => <>404: Page not found</>} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
