import { Search } from '../features/Search';
import { Homepage } from '../pages/Homepage';
import { SubredditPage } from '../pages/SubredditPage';
import { PostDetailsPage } from '../pages/PostDetailsPage';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
