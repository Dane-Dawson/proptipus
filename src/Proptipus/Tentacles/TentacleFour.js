import React from "react";
import Logo from "../../images/BirdLogo.png"

class TentacleFour extends React.Component {
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
          {this.props.friendsList.map((friend) =>
            <tr>
              <td>{friend.name}</td>
              <td>{friend.contact}</td>
              <td>
                <a href={friend.socialMedia}>
                  <img className= "bird-logo" src={Logo}/>
                </a>
              </td>
            </tr>
          )
          }
        </table>
      </div>
    );
  }
}

export default TentacleFour;
