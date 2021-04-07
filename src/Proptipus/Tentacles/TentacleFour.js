import React from "react";
import Logo from "../../images/BirdLogo.png"

class TentacleFour extends React.Component {
  friends = this.props.friendsList

  render() {
    return (
      <div className="tentacle-four">
      <span className="friends-header">My Favorite Friends</span>
        <table id="propti-friends">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          {/* Lines 16-24 contain the table row we want to replicate for each one of our friends */}
          { this.friends.map( (friend, index) => (
            <tr key={index}>
              <td>{ friend.name }</td>
              <td>{ friend.contact}</td>
              <td>
                <a href={ friend.socialMedia }>
                  <img className= "bird-logo" src={Logo} alt='social logo'/>
                </a>
              </td>
            </tr>
          ))}
          {/* This closes the table row we are going to be recreating! */}
        </table>
      </div>
    );
  }
}

export default TentacleFour;
