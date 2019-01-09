import React, { Component } from "react";
import { Menu, MenuMenu, MenuItem, Icon } from "semantic-ui-react";

class Channels extends Component {
  state = {
    channels: []
  };
  render() {
    const { channels } = this.state;
    return (
      <MenuMenu style={{ paddingBottom: "2em" }}>
        <MenuItem>
          <span>
            <Icon name="exchange" /> CHANNELS
          </span>{" "}
          ({channels.length}) <Icon name="add" />
        </MenuItem>
        {/* Channel */}
      </MenuMenu>
    );
  }
}
export default Channels;
