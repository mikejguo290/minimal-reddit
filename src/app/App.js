import React from 'react';
import { Search } from '../features/Search';
import { Homepage } from '../pages/Homepage';
import { SubredditPage } from '../pages/SubredditPage';
import { PostDetailsPage } from '../pages/PostDetailsPage';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFoundPage';
import store from './store';
import { Provider } from 'react-redux';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <Search />
          <Switch>
            <Route path="/r/:subreddit/comments/:postId">
              <PostDetailsPage />
            </Route>
            <Route path="/r/:subreddit">
              <SubredditPage />
            </Route>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
