import React, { Component } from "react";
import mime from "mime-types";
//prettier-ignore
import { Modal, ModalHeader, ModalContent, Input, ModalActions, Button, Icon } from 'semantic-ui-react';

class FileModal extends Component {
  state = {
    file: null,
    authorized: ["image/jpeg", "image/png"]
  };

  addFile = event => {
    const file = event.target.files[0];
    if (file) {
      this.setState({ file });
    }
  };

  sendFile = () => {
    const { file } = this.state;
    const { uploadFile, closeModal } = this.props;

    if (file !== null) {
      if (this.isAuthorized(file.name)) {
        //send file
        const metadata = {
          contentType: mime.lookup(file.name)
        };
        uploadFile(file, metadata);
        closeModal();
        this.clearFile();
      }
    }
  };

  isAuthorized = filename =>
    this.state.authorized.includes(mime.lookup(filename));

  clearFile = () => this.setState({ file: null });

  render() {
    const { modal, closeModal } = this.props;

    return (
      <Modal basic open={modal} onClose={closeModal}>
        <ModalHeader>Select an Image File</ModalHeader>
        <ModalContent>
          <Input
            onChange={this.addFile}
            fluid
            label="File types: jpg, png"
            name="file"
            type="file"
          />
        </ModalContent>

        <ModalActions>
          <Button onClick={this.sendFile} color="green" inverted>
            <Icon name="checkmark" /> Send
          </Button>

          <Button color="red" inverted onClick={closeModal}>
            <Icon name="remove" /> Cancel
          </Button>
        </ModalActions>
      </Modal>
    );
  }
}
export default FileModal;
