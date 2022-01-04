import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Design from './pages/Design';
import Development from './pages/Development';

function App() {
  return (
    <main>
      <Switch>

        {/* Home page */}
        <Route exact path="/">
            <Home/>
        </Route>

        {/* Development Lessons Page */}
        <Route exact path="/development">
          <Development/>
        </Route>

        {/* Design Lessons Page */}
        <Route exact path="/design">
          <Design/>
        </Route>

      </Switch>
    </main>
  );
}

export default App;
