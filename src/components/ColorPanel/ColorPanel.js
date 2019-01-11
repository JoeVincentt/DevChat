import React, { Component } from "react";
//prettier-ignore
import { Sidebar, Menu, Divider, Button, Modal, ModalHeader, ModalContent, ModalActions, Icon, Label } from "semantic-ui-react";
import { SliderPicker } from "react-color";

class ColorPanel extends Component {
  state = {
    modal: false
  };

  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });

  render() {
    const { modal } = this.state;
    return (
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        width="very thin"
      >
        <Divider />
        <Button icon="add" size="small" color="blue" onClick={this.openModal} />

        {/* Color Picker Modal */}
        <Modal basic open={modal} onClose={this.closeModal}>
          <ModalHeader>Choose App Colors</ModalHeader>
          <ModalContent>
            <Label content="Primary Color" />
            <Divider />
            <SliderPicker />
            <Divider />
            <Label content="Secondary Color" />
            <Divider />
            <SliderPicker />
          </ModalContent>
          <ModalActions>
            <Button color="green" inverted>
              <Icon name="checkmark" /> Save Colors
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </ModalActions>
        </Modal>
      </Sidebar>
    );
  }
}
export default ColorPanel;
