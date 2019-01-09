import React, { Component } from "react";
import { Segment, Input, Button, ButtonGroup } from "semantic-ui-react";

class MessageForm extends Component {
  render() {
    return (
      <Segment classname="message__form">
        <Input
          fluid
          name="message"
          style={{ marginBottom: "0.7em" }}
          label={<Button icon={"add"} />}
          labelPosition="left"
          placeholder="Write your message"
        />
        <ButtonGroup icon width="2">
          <Button
            color="orange"
            content="Add Reply"
            labelPosition="Left"
            icon="edit"
          />
          <Button
            color="teal"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
        </ButtonGroup>
      </Segment>
    );
  }
}

export default MessageForm;
