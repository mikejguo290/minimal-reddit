import { Page } from '../components/Page';
import { Search } from '../features/Search';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Search />
      <Router>
        <Page /> {/* going to be subsituted for Homepage and others in a Router switch */}
      </Router>
    </>
  );
}

export default App;
