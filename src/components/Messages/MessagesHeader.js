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
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading
    } = this.props;

    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginTop: 0 }}>
          <span>
            {" "}
            {channelName}
            <Icon name={"star outline"} color="black" />{" "}
          </span>
          <HeaderSubheader>{numUniqueUsers}</HeaderSubheader>
        </Header>
        {/* Channel search input */}
        <Header floated="right">
          <Input
            loading={searchLoading}
            onChange={handleSearchChange}
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}
export default MessagesHeader;
