import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router,
         Route,
         Link
       } from "react-router-dom"
import RaisedButton from "material-ui/RaisedButton"
import axios from 'axios';
import CreateJoin from "./CreateJoin.js"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


    const Home = () => (
        <div>
          <h2>Home</h2>
        </div>
    )

class HelloWorld extends React.Component{
  render() {
    return (
        <MuiThemeProvider>
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/createjoin">About</Link></li>
              </ul>
              <form action="/" method="POST">
                <input type="submit" value="Submit" />
              </form>
              <Route exact path="/" component={Home}/>
              <Route path="/createjoin" component={CreateJoin}/>
            </div>
          </Router>
        </MuiThemeProvider>
    )
  }
}

export default HelloWorld
