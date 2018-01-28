import React from "react"
import PropTypes from "prop-types"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import { withRouter } from "react-router-dom"

class CreateJoin extends React.Component {
  constructor(props, context) {
     super(props, context);
    this.state = {
      value: '',
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value
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
                            history.push("/games/" + data.session_id);
                        });
                        history.push("/lobby");
                    }
                )
        }
        const joinHandler = () => {
          const name = this.state.name;
          fetch("/".concat(this.state.value), {
                method: 'post',
                body: {
                  name: this.state.name 
                }
            })
                .then(
                    function(response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                        response.status);
                            return;
                        }
                        response.json().then(function(data) {
                          console.log(data);
                          sessionStorage.setItem("playerName", name);
                          history.push("/");
                        });
                    }
                )
        }
        return (
            <div>
              <RaisedButton onClick={clickHandler} label="Create Room" primary={true}/>
              <br/>
              <TextField value={this.state.value} onChange={this.handleChange} hintText="Session ID" /> <br/>
              <TextField value={this.state.name} onChange={this.handleName} hintText="Name" /> <br/>
              <RaisedButton label="Join Room" onClick={() => {joinHandler()}} secondary={true}/>
            </div>
        )
    }
}

export default withRouter(CreateJoin);
