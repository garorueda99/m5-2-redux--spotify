import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import GlobalStyles from '../GlobalStyles';
import ArtistRoute from '../ArtistRoute';
import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from '../../actions';
import { useDispatch } from 'react-redux';

const DEFAULT_ARTIST_ID = '44TGR1CzjKBxSHsSEy7bi9';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestAccessToken());
    fetch('/spotify_access_token')
      .then((noJson) => noJson.json())
      .then((json) => receiveAccessToken(json.access_token))
      .catch((err) => {
        console.log(err);
        dispatch(receiveAccessTokenError());
      });
  }, []);

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
