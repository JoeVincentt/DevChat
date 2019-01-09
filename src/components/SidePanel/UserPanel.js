import React, { Component } from "react";
import {
  Grid,
  GridColumn,
  Header,
  HeaderContent,
  GridRow,
  Icon,
  Dropdown
} from "semantic-ui-react";

class UserPanel extends Component {
  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>User</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span>Sign Out</span>
    }
  ];

  render() {
    return (
      <Grid style={{ background: "#4c3c4c" }}>
        <GridColumn>
          <GridRow style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <HeaderContent>DevChat</HeaderContent>
            </Header>
          </GridRow>
          {/* User Dropdows */}
          <Header style={{ padding: "0.25em" }} as="h4" inverted>
            <Dropdown
              trigger={<span>User</span>}
              options={this.dropdownOptions()}
            />
          </Header>
        </GridColumn>
      </Grid>
    );
  }
}
export default UserPanel;
