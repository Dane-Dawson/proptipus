import React from "react";
import Logo from "../../images/BirdLogo.png"

class TentacleFour extends React.Component {
  
  render() {
    let friends = this.props.friendsList
    return (
      <div className="tentacle-four">
      <span className="friends-header">My Favorite Friends</span>
        <table id="propti-friends">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>

            {friends.map(friend => {
              return (

             <tr>
              <td> {friend.name}</td>
              <td>{friend.contact}</td>
              <td>
                <a target="_blank" href={friend.socialMedia}>
                  <img alt="bird-logo" className= "bird-logo" src={Logo}/>
                </a>
              </td>
            </tr>

              )

            })}
        </table>
      </div>
    );
  }
}

export default TentacleFour;
