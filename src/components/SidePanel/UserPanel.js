import React, { Component } from "react";
import {
  Grid,
  GridColumn,
  Header,
  HeaderContent,
  GridRow,
  Icon,
  Dropdown,
  Image,
  Modal,
  ModalHeader,
  ModalContent,
  Input,
  ModalActions,
  Button
} from "semantic-ui-react";
import firebase from "../../firebase";

class UserPanel extends Component {
  state = {
    user: this.props.currentUser,
    modal: false
  };

  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });

  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span onClick={this.openModal}>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignout}>Sign Out</span>
    }
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out"));
  };

  render() {
    const { user, modal } = this.state;
    const { primaryColor } = this.props;

    return (
      <Grid style={{ background: primaryColor }}>
        <GridColumn>
          <GridRow style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <HeaderContent>DevChat</HeaderContent>
            </Header>
            {/* User Dropdows */}
            <Header style={{ padding: "0.25em" }} as="h4" inverted>
              <Dropdown
                trigger={
                  <span>
                    <Image src={user.photoURL} spaced="right" avatar />
                    {user.displayName}
                  </span>
                }
                options={this.dropdownOptions()}
              />
            </Header>
          </GridRow>
          {/* Change user Avatar Modal */}
          <Modal basic open={modal} onClose={this.closeModal}>
            <ModalHeader>Change Avatar</ModalHeader>
            <ModalContent>
              <Input fluid type="file" label="New Avatar" name="previewImage" />
              <Grid centered stackable columns={2}>
                <GridRow centered>
                  <GridColumn className="ui centered aligned grid">
                    {/* Image Preview */}
                  </GridColumn>
                  <GridColumn>{/* Cropped image preview */}</GridColumn>
                </GridRow>
              </Grid>
            </ModalContent>
            <ModalActions>
              <Button color="green" inverted>
                <Icon name="save" /> Save Avatar
              </Button>
              <Button color="orange" inverted>
                <Icon name="image" /> Preview
              </Button>
              <Button color="red" inverted onClick={this.closeModal}>
                <Icon name="remove" /> Cancel
              </Button>
            </ModalActions>
          </Modal>
        </GridColumn>
      </Grid>
    );
  }
}

export default UserPanel;
