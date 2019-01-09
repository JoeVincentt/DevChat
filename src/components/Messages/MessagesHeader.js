import React, { Component } from "react";
import {
  Segment,
  Header,
  Icon,
  HeaderSubheader,
  Input
} from "semantic-ui-react";

class MessagesHeader extends Component {
  render() {
    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginTop: 0 }}>
          <span>
            {" "}
            Channel
            <Icon name={"star outline"} color="black" />{" "}
          </span>
          <HeaderSubheader>2 users</HeaderSubheader>
        </Header>
        {/* Channel search input */}
        <Header floated="right">
          <Input
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Meassages"
          />
        </Header>
      </Segment>
    );
  }
}
export default MessagesHeader;
