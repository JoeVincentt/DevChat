import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentChannel } from "../../actions/index";
//prettier-ignore
import { MenuMenu, MenuItem, Icon, Modal, ModalHeader, ModalContent, Form, FormField, Input, ModalActions, Button } from "semantic-ui-react";
import firebase from "../../firebase";

class Channels extends Component {
  state = {
    user: this.props.currentUser,
    channels: [],
    channelName: "",
    channelDetails: "",
    channelsRef: firebase.database().ref("channels"),
    modal: false,
    loading: false
  };

  componentDidMount() {
    this.addListeners();
  }

  addListeners = () => {
    let loadedChannels = [];
    this.state.channelsRef.on("child_added", snap => {
      loadedChannels.push(snap.val());
      this.setState({ channels: loadedChannels });
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.isFormValid(this.state)) {
      this.setState({ loading: true });
      this.addChannel();
    }
  };

  addChannel = () => {
    const { channelsRef, channelName, channelDetails, user } = this.state;

    const key = channelsRef.push().key;

    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL
      }
    };

    channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channelName: "", channelDetails: "", loading: false });
        this.closeModal();
        console.log("channel added");
      })
      .catch(err => {
        console.error(err);
      });
  };

  isFormValid = ({ channelName, channelDetails }) => {
    if (channelDetails && channelName) {
      return true;
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  changeChannel = channel => {
    this.props.setCurrentChannel(channel);
  };

  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });

  displayChannels = channels =>
    channels.length > 0 &&
    channels.map(channel => (
      <MenuItem
        key={channel.id}
        onClick={() => this.changeChannel(channel)}
        name={channel.name}
        style={{ opacity: 0.7 }}
      >
        # {channel.name}
      </MenuItem>
    ));

  render() {
    const { channels, modal, loading } = this.state;
    return (
      <React.Fragment>
        <MenuMenu style={{ paddingBottom: "2em" }}>
          <MenuItem>
            <span>
              <Icon name="exchange" /> CHANNELS
            </span>{" "}
            ({channels.length}){" "}
            <Icon
              name="add"
              onClick={this.openModal}
              style={{ cursor: "pointer" }}
            />
          </MenuItem>
          {/* Channel */}
          {this.displayChannels(channels)}
        </MenuMenu>
        {/* // Add channel */}
        <Modal basic open={modal} onClose={this.closeModal}>
          <ModalHeader>Add a Channel</ModalHeader>
          <ModalContent>
            <Form onSubmit={this.handleSubmit}>
              <FormField>
                <Input
                  fluid
                  label="Name of Channel"
                  name="channelName"
                  onChange={this.handleChange}
                />
              </FormField>

              <FormField>
                <Input
                  fluid
                  label="About the Channel"
                  name="channelDetails"
                  onChange={this.handleChange}
                />
              </FormField>
            </Form>
          </ModalContent>

          <ModalActions>
            {loading ? null : (
              <Button color="green" inverted>
                <Icon name="checkmark" onClick={this.handleSubmit} /> Add
              </Button>
            )}

            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </ModalActions>
        </Modal>
      </React.Fragment>
    );
  }
}
export default connect(
  null,
  { setCurrentChannel }
)(Channels);
