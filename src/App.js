// Importing React hooks
import {Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

// Importing global styling
import './styles/app.scss';

// Importing pages 
import Home from './pages/Home';
import Design from './pages/Design';
import Development from './pages/Development';

// Importing Header and Footer
import Header from './components/Header';
import Footer from './components/Footer';

// Importing Bootstrap Components 
import Spinner from 'react-bootstrap/Spinner';


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
      <>
        <Header/>
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
        <Footer/>
      </>
    );
  } 
  else {
    return(
      <section id='loading-section'>
        <h1>Loading Lessons...</h1>
        <Spinner animation="border" />
      </section>
        
    )
  }
}

export default App;
