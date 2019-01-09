import React, { Component } from "react";
import { Segment, CommentGroup } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";

class Messages extends Component {
  render() {
    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <CommentGroup className="messages">{/* Messages */}</CommentGroup>
        </Segment>

        <MessageForm />
      </React.Fragment>
    );
  }
}
export default Messages;
