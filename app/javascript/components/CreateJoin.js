import React from "react"
import PropTypes from "prop-types"
import RaisedButton from "material-ui/RaisedButton"

class CreateJoin extends React.Component {
    clickHandler = () => {
        fetch('/', {
            method: 'post',
            body: {
            }
        });
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
