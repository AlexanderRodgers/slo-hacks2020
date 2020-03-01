import React, { useState, useEffect } from "react";
import history from './services/history';
import Layout from './components/Layout';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import MedForm from './components/MedForm';
import { Router, Route, Switch, History } from 'react-router-dom';

const App = () => {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('config'));
  useEffect(() => {
    setCurrentUser(localStorage.getItem('config'));
  }, []);
    // components were seperated into their own files under the 'components' folder. They then get imported here. 

      return (
        <Router history={history}>
          <Layout>
            <Switch>
              {/* When the route in the search bar changes, the components that are visible change with it.  */}
              {!currentUser && history.push('/login')}
              <Route path="/login" component={Login}></Route>
              <Route path="/" exact component={Main}></Route>
              {currentUser && <Route path="/home" component={Home}></Route>}
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/medical" component={MedForm}></Route>
            </Switch>
          </Layout>
        </Router>
      );
  }

export default App;
