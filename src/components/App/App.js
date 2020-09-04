import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ArtistRoute from '../ArtistRoute';

import GlobalStyles from '../GlobalStyles';

const DEFAULT_ARTIST_ID = '44TGR1CzjKBxSHsSEy7bi9';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/artist/:id">
          <ArtistRoute />
        </Route>
        <Route path="/">
          <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;
