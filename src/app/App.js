import { Page } from '../components/Page';
import { Search } from '../features/Search';
import redditImage from '../images/reddit.jpeg' /* local imports */

function App() {
  return (
    <>
      <Search />
      <Page /> {/* going to be subsituted for Homepage and others in a Router switch */}
      
    </>
  );
}

export default App;
