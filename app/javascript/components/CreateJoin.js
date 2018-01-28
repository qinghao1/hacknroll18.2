import React from "react"
import PropTypes from "prop-types"
import RaisedButton from "material-ui/RaisedButton"
import { withRouter } from "react-router-dom"

class CreateJoin extends React.Component {
  constructor(props, context) {
     super(props, context);
  }
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
                        console.log(history);
                        history.push("/lobby");
                    }
                )
        }
        return (
            <div>
              <RaisedButton onClick={clickHandler} label="Create Room" primary={true}/>
              <br/>
              <RaisedButton label="Join Room" secondary={true}/>
            </div>
        )
    }
}

export default withRouter(CreateJoin);
