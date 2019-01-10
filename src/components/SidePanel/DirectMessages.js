import React, { Component } from "react";
import { MenuMenu, MenuItem, Icon } from "semantic-ui-react";

class DirectMessages extends Component {
  state = {
    users: []
  };

  render() {
    const { users } = this.state;
    return (
      <MenuMenu className="menu">
        <MenuItem>
          <span>
            <Icon name="mail" /> DIRECT MESSAGES
          </span>{" "}
          ({users.length})
        </MenuItem>
        {/* Users to Send Direct Messages */}
      </MenuMenu>
    );
  }
}
export default DirectMessages;
