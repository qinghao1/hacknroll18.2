import React from "react"
import PropTypes from "prop-types"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import { withRouter } from "react-router-dom"

class CreateJoin extends React.Component {
  constructor(props, context) {
     super(props, context);
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
    render () {
        const { history } = this.props;
        const clickHandler = () => {
            fetch('/', {
                method: 'post',
                body: {
                }
            })
                .then(
                    function(response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                        response.status);
                            return;
                        }
                        
                        // Examine the text in the response
                        response.json().then(function(data) {
                            console.log(data);
                        });
                        history.push("/lobby");
                    }
                )
        }
        const joinHandler = (val) => {
          console.log(val);  
          fetch("/".concat(val), {
                method: 'post',
                body: {
                  name: val 
                }
            })
                .then(
                    function(response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                        response.status);
                            return;
                        }
                         
                        history.push("/lobby");
                    }
                )
        }
        return (
            <div>
              <RaisedButton onClick={clickHandler} label="Create Room" primary={true}/>
              <br/>
              <TextField value={this.state.value} onChange={this.handleChange} hintText="Session ID" /> <br/>
              <RaisedButton label="Join Room" onClick={() => {joinHandler(this.state.value)}} secondary={true}/>
            </div>
        )
    }
}

export default withRouter(CreateJoin);
