import React, { Component } from "react";
//prettier-ignore
import { Segment, Header, Accordion, AccordionTitle, Icon, AccordionContent } from "semantic-ui-react";

class MetaPanel extends Component {
  state = {
    privateChannel: this.props.isPrivateChannel,
    activeIndex: 0
  };

  setActiveIndex = (event, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex, privateChannel } = this.state;

    if (privateChannel) return null;
    return (
      <Segment>
        <Header as="h3" attached="top">
          About # Channel
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
            details
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
            posters
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
            creator
          </AccordionContent>
        </Accordion>
      </Segment>
    );
  }
}
export default MetaPanel;
