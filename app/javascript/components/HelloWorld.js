import React from "react"
import PropTypes from "prop-types"
import RaisedButton from "material-ui/RaisedButton"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HelloWorld extends React.Component {
  render () {
    return (
			<MuiThemeProvider>
      	<div>
        	<div>Greeting: {this.props.greeting}</div>
					<RaisedButton> whjeee</RaisedButton>
      	</div>
			</MuiThemeProvider>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
