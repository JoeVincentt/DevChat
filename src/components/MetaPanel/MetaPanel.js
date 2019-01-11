import React, { Component } from "react";
//prettier-ignore
import { Segment, Header, Accordion, AccordionTitle, Icon, AccordionContent, Image, List, ListItem, ListContent, ListHeader, ListDescription} from "semantic-ui-react";

class MetaPanel extends Component {
  state = {
    channel: this.props.currentChannel,
    privateChannel: this.props.isPrivateChannel,
    activeIndex: 0
  };

  setActiveIndex = (event, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  formatCount = num => (num > 1 || num === 0 ? `${num} posts` : `${num} post`);

  displayTopPosterts = posts =>
    Object.entries(posts)
      .sort((a, b) => b[1] - a[1])
      .map(([key, val], i) => (
        <ListItem key={i}>
          <Image avatar src={val.avatar} />
          <ListContent>
            <ListHeader as="a">{key}</ListHeader>
            <ListDescription>{this.formatCount(val.count)}</ListDescription>
          </ListContent>
        </ListItem>
      ))
      .slice(0, 5);

  render() {
    const { activeIndex, privateChannel, channel } = this.state;
    const { userPosts } = this.props;

    if (privateChannel) return null;
    return (
      <Segment loading={!channel}>
        <Header as="h3" attached="top">
          About # {channel && channel.name}
        </Header>
        {/* Segment 1 */}
        <Accordion styled attached="true">
          <AccordionTitle
            active={activeIndex === 0}
            index={0}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="info" />
            Channel Details
          </AccordionTitle>
          <AccordionContent active={activeIndex === 0}>
            {channel && channel.details}
          </AccordionContent>
          {/* Segment 2  */}
          <AccordionTitle
            active={activeIndex === 1}
            index={1}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="user circle" />
            Top Posters
          </AccordionTitle>
          <AccordionContent active={activeIndex === 1}>
            <List>{userPosts && this.displayTopPosterts(userPosts)}</List>
          </AccordionContent>
          {/* Segment 3 */}
          <AccordionTitle
            active={activeIndex === 2}
            index={2}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="pencil alternate" />
            Created By
          </AccordionTitle>
          <AccordionContent active={activeIndex === 2}>
            <Header as="h3">
              <Image circular src={channel && channel.createdBy.avatar} />
              {channel && channel.createdBy.name}
            </Header>
          </AccordionContent>
        </Accordion>
      </Segment>
    );
  }
}
export default MetaPanel;
