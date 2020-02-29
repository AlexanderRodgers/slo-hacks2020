import React from "react";
import history from './services/history';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {

      // components were seperated into their own files under the 'components' folder. They then get imported here. 

        return (
          <Router history={history}>
            <Switch>
              {/* When the route in the search bar changes, the components that are visible change with it.  */}
              <Route path exact="/" component = {Main}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/login" component={SignUp}></Route>
            </Switch>
          </Router>
        );
    }
}

export default App;
