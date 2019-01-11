import React, { Component } from "react";
import { MenuMenu, Icon, MenuItem } from "semantic-ui-react";
import { connect } from "react-redux";
import { setCurrentChannel, setPrivateChannel } from "../../actions/index";

class Starred extends Component {
  state = {
    activeChannel: "",
    starredChannels: []
  };

  setActiveChannel = channel => {
    this.setState({ activeChannel: channel.id });
  };

  changeChannel = channel => {
    this.setActiveChannel(channel);

    this.props.setCurrentChannel(channel);
    this.props.setPrivateChannel(false);
  };

  displayChannels = starredChannels =>
    starredChannels.length > 0 &&
    starredChannels.map(channel => (
      <MenuItem
        key={channel.id}
        onClick={() => this.changeChannel(channel)}
        name={channel.name}
        style={{ opacity: 0.7 }}
        active={channel.id === this.state.activeChannel}
      >
        # {channel.name}
      </MenuItem>
    ));

  render() {
    const { starredChannels } = this.state;
    return (
      <MenuMenu className="menu">
        <MenuItem>
          <span>
            <Icon name="exchange" /> STARRED
          </span>{" "}
          ({starredChannels.length}){" "}
        </MenuItem>
        {/* Channel */}
        {this.displayChannels(starredChannels)}
      </MenuMenu>
    );
  }
}
export default connect(
  null,
  { setCurrentChannel, setPrivateChannel }
)(Starred);
