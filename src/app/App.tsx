import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import Home from '../pages/home/Home';

const App = () => {
  const location = useLocation();

  return (
    <ScrollToTop>
      <main>
        <Switch location={location}>
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </ScrollToTop>
  );
};

export default App;
