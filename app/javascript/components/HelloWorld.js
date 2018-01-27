import React from "react"
import PropTypes from "prop-types"
import RaisedButton from "material-ui/RaisedButton"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

class HelloWorld extends React.Component {

  postReq = () => {
    axios.post('/', {})
      .then((res) => {
        console.log(res);
      })
  };

  render () {
    return (
			<MuiThemeProvider>
      	<div>
            <form action="/" method="POST">
              <input type="submit" value="Submit" />
            </form>
      	</div>
			</MuiThemeProvider>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
