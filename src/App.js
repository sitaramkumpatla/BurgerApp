import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import List from './List'
import Form from './Form'
import {BrowserRouter,Route,Switch,Link, Redirect} from 'react-router-dom'
function App() {
  return (
    <div>
      <Layout />
      {/* <BrowserRouter>
        <ul>
          <li><Link to='/'>List</Link></li>
          <li><Link to='/form'>Form</Link></li>
        </ul>
        <Switch>
          <Route exact path='/form' component={Form}/>
          <Route path='/list'component={List}/>
          <Redirect to='/list' from='/' />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
