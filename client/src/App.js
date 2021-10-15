import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home';
import DogCreate from './components/DogCreate'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
    <Route exact path= '/' component = {LandingPage}/>
    <Route path = "/home" component={Home}/>
    <Route path="/dog" component= {DogCreate}/>
      </Switch>
     
    </div>
    </BrowserRouter>
  );

}

export default App;
