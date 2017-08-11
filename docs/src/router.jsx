import React from 'react';
import { hashHistory, Route, IndexRoute } from 'react-router';
import HotRouter from 'utils/HotRouter';

import HomePage from 'components/routes/home/HomePage';
import DocsPage from 'components/routes/docs/DocsPage';
import App from 'components/App';

export default function AppRouter() {
  return (
    <HotRouter history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="docs" component={DocsPage} />
      </Route>
    </HotRouter>
  );
}
