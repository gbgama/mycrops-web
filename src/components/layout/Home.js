import React, { Component } from "react";

import Navbar from "../layout/Navbar";
import HubSection from "./HubSection";
import CropSection from "./CropSection";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getUserHub = token => {
    fetch("https://mycrops.herokuapp.com/api/hubs", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ hub: responseJson });
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };

  componentDidMount() {
    const { history } = this.props;
    // get token
    const token = history.location.state;
    // make get request with token
    this._getUserHub(token);
  }

  render() {
    const { hub } = this.state;

    if (hub && typeof hub.noprofile === "undefined") {
      return (
        <div style={{ backgroundColor: "#358456" }}>
          <Navbar
            isAuthorized={true}
            name={hub.user.name}
            email={hub.user.email}
          />
          <div className="home container">
            <HubSection
              hubName={this.state.hub.name}
              airTemperature={this.state.hub.airTemperature}
              airHumidity={this.state.hub.airHumidity}
              readings={this.state.hub.readings}
              updateTime={this.state.hub.updated}
            />
            <CropSection 
              cropName={this.state.hub.crops[0].name}
              soilHumidity={this.state.hub.crops[0].soilHumidity}
              soilCondition={this.state.hub.crops[0].soilCondition}
              readings={this.state.hub.readings}
              />
          </div>
        </div>
      );
    }
    if (hub && typeof hub.noprofile !== "undefined") {
      return (
        <div className="noHubFound">
          <Navbar isAuthorized={true} />
          <h1>No hub found for this user</h1>
        </div>
      );
    } else {
      return (
        <div className="noProfileFound">
          <Navbar isAuthorized={false} />
          <h1>No profile found for this user</h1>
        </div>
      );
    }
  }
}

export default Home;
