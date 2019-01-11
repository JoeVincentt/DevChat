import React, { Component } from "react";
//prettier-ignore
import { Sidebar, Menu, Divider, Button, Modal, ModalHeader, ModalContent, ModalActions, Icon, Label, Segment } from "semantic-ui-react";
import { SliderPicker } from "react-color";

class ColorPanel extends Component {
  state = {
    modal: false,
    primary: "#43bf40",
    secondary: "#a740bf"
  };

  handleChangePrimary = color => this.setState({ primary: color.hex });
  handleChangeSecondary = color => this.setState({ secondary: color.hex });

  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });

  render() {
    const { modal, primary, secondary } = this.state;
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
            <Segment inverted>
              <Label content="Primary Color" />
              <Divider />
              <SliderPicker
                color={primary}
                onChange={this.handleChangePrimary}
              />
            </Segment>
            <Segment inverted>
              <Label content="Secondary Color" />
              <Divider />
              <SliderPicker
                color={secondary}
                onChange={this.handleChangeSecondary}
              />
            </Segment>
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
