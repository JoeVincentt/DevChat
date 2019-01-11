import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import "./App.css";
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";

const App = ({ currentUser, currentChannel, isPrivateChannel, userPosts }) => (
  <Grid columns="equal" className="App" style={{ background: "#eee" }}>
    <ColorPanel
      key={currentUser && currentUser.name}
      currentUser={currentUser}
    />
    <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser} />
    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>
    {!isPrivateChannel ? (
      <Grid.Column width={4}>
        <MetaPanel
          key={currentChannel && currentChannel.name}
          isPrivateChannel={isPrivateChannel}
          currentChannel={currentChannel}
          userPosts={userPosts}
        />
      </Grid.Column>
    ) : null}
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts
});

export default connect(mapStateToProps)(App);
