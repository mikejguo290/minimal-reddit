import { Search } from '../features/Search';
import { Homepage } from '../pages/Homepage';
import { SubredditPage } from '../pages/SubredditPage';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Search />
      <Router>
        <Switch>
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
