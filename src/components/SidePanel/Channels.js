import React, { Component } from "react";
//prettier-ignore
import { MenuMenu, MenuItem, Icon, Modal, ModalHeader, ModalContent, Form, FormField, Input, ModalActions, Button } from "semantic-ui-react";

class Channels extends Component {
  state = {
    channels: [],
    channelName: "",
    channelDetails: "",
    modal: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });

  render() {
    const { channels, modal } = this.state;
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
        </MenuMenu>
        {/* // Add channel */}
        <Modal basic open={modal} onClose={this.closeModal}>
          <ModalHeader>Add a Channel</ModalHeader>
          <ModalContent>
            <Form>
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
            <Button color="green" inverted>
              <Icon name="checkmark" /> Add
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </ModalActions>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Channels;
