import React from "react"
import PropTypes from "prop-types"

class Gamepage extends React.Component {
  render () {
  	var players = ["hello","a","b"]
	const listItems = players.map((player) =>
	  <li>{player}</li>
		);
    return (
        <div>
          <center> question test </center>
          {listItems}
          
        </div>
    )
  }
}

export default Gamepage
