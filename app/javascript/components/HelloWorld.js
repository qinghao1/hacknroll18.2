import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router,
         Route,
         Link
       } from "react-router-dom"
import RaisedButton from "material-ui/RaisedButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"


const HelloWorld = () => {
    const Home = () => (
        <div>
          <h2>Home</h2>
        </div>
    )
    const About = () => (
        <div>
          <h2>About</h2>
        </div>
    )
    return (
        <MuiThemeProvider>
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
          </Router>
        </MuiThemeProvider>
    )
}

//class HelloWorld extends React.Component {
//    render () {
//      return (
//	<MuiThemeProvider>
//          <Router>
//            <div>
//              <ul>
//                <li><Link to="/">Home</Link></li>
//                <li><Link to="/about">About</Link></li>
//                <li><Link to="/topics">Topics</Link></li>
//              </ul>
//              
//              <hr/>
//              
//              <Route exact path="/" component={Home}/>
//              <Route path="/about" component={About}/>
//              <Route path="/topics" component={Topics}/>
//            </div>
//          </Router>
//      	  <div>
//            <div>Greeting: {this.props.greeting}</div>
//	    <RaisedButton> whjeee</RaisedButton>
//      	  </div>
//	</MuiThemeProvider>
//    );
//  }
//}

//HelloWorld.propTypes = {
//  greeting: PropTypes.string
//};
export default HelloWorld
