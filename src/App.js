import './App.css';
import Hero from './components/Hero//Hero.js'
import Registration from './components/Registration/Registration'
import SignIn from './components/Sign-in/Sign-in';
import Dashboard from './components/Dashboard/Dashboard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Dashboard />  */}
        <Switch>
          <Route exact path='/'>
            <Hero />
          </Route>
          <Route path='/register'>
            <Registration />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
