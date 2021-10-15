import { Search } from '../features/Search';
import { Homepage } from '../pages/Homepage';
import { BrowserRouter as Router , Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Search />
      <Router>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Router>
    </>
  );
}

export default App;
