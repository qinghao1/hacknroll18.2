import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router,
         Route,
         Link
       } from "react-router-dom"
import RaisedButton from "material-ui/RaisedButton"
import TakePic from "./TakePic.js"
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
                <li><Link to="/camera">Take a foto</Link></li>
              </ul>
              <Route exact path="/" component={Home}/>
              <Route path="/createjoin" component={CreateJoin}/>
              <Route path="/camera" component={TakePic}/>
            </div>
          </Router>
        </MuiThemeProvider>
    )
  }
}

export default HelloWorld
