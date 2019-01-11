import React, { Component } from "react";
import { MenuMenu, Icon, MenuItem } from "semantic-ui-react";
import { connect } from "react-redux";
import { setCurrentChannel, setPrivateChannel } from "../../actions/index";
import firebase from "../../firebase";

class Starred extends Component {
  state = {
    user: this.props.currentUser,
    usersRef: firebase.database().ref("users"),
    activeChannel: "",
    starredChannels: []
  };

  componentDidMount() {
    // this.mounted = true;
    if (this.state.user) {
      this.addListeners(this.state.user.uid);
    }
  }

  // componentWillUnmount() {
  //   this.mounted = false;
  //   this.removeListeners();
  // }

  // removeListeners = () => {
  //   this.state.usersRef.off();
  // };

  addListeners = userId => {
    this.state.usersRef
      .child(userId)
      .child("starred")
      .on("child_added", snap => {
        const starredChannel = { id: snap.key, ...snap.val() };
        this.setState({
          starredChannels: [...this.state.starredChannels, starredChannel]
        });
      });

    this.state.usersRef
      .child(userId)
      .child("starred")
      .on("child_removed", snap => {
        const channelToRemove = { id: snap.key, ...snap.val() };
        const filteredChannels = this.state.starredChannels.filter(channel => {
          return channel.id !== channelToRemove.id;
        });
        this.setState({ starredChannels: filteredChannels });
      });
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
