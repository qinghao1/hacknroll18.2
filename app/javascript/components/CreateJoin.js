import React from "react"
import PropTypes from "prop-types"
import RaisedButton from "material-ui/RaisedButton"

class CreateJoin extends React.Component {
    clickHandler = () => {
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
                }
            )
    }
    render () {
        return (
            <div>
              <RaisedButton onClick={this.clickHandler} label="Create Room" primary={true}/>
              <br/>
              <RaisedButton label="Join Room" secondary={true}/>
            </div>
        )
    }
}

export default CreateJoin
