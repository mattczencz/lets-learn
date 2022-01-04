import {Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

// Importing pages 
import Home from './pages/Home';
import Design from './pages/Design';
import Development from './pages/Development';


function App() {
  // URL for API data
  const URL = 'https://czencz-lets-learn.herokuapp.com/lessons'

  // State to hold URL data
  const [allLessons, setAllLessons] = useState(null)

  // Function to get data from API URL 
  const getAllLessons = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setAllLessons(data)
  }

  // On load, run the function to get set the allLessons state
  useEffect(() => getAllLessons(), [])


  // If there is something in the allLessons state, load the app. Otherwise, print App is loading
  if(allLessons !== null){
    return (
      <main>
        <Switch>
  
          {/* Home page */}
          <Route exact path="/">
              <Home allLessons={allLessons}/>
          </Route>
  
          {/* Development Lessons Page */}
          <Route exact path="/development">
            <Development allLessons={allLessons}/>
          </Route>
  
          {/* Design Lessons Page */}
          <Route exact path="/design">
            <Design allLessons={allLessons}/>
          </Route>
  
        </Switch>
      </main>
    );
  } else {
    return(
      <section className='loading-section'>
        <h1>App is loading...</h1>
      </section>
    )
  }
}

export default App;
