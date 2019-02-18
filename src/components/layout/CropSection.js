import React, { Component } from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryCursorContainer
} from "victory";


class CropSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const readings = this.props.readings;

    let data = [];

    readings.map(reading => {
      let value = {};
      value.x = readings.indexOf(reading);
      value.y = reading.soilHum * -1;

      data.push(value);

      return true;
    });

    this.setState({ data: data });
  }

  render() {
    console.log(this.state);
    return (
      <div className="crop">
        <div className="headerContainer">
          <h2>{this.props.cropName}</h2>
          <h2>Condição: {this.props.soilCondition}</h2>
        </div>
        <div className="chartContainer">
          <VictoryChart
            maxDomain={{ y: 10}}
            theme={VictoryTheme.material}
            containerComponent={
              <VictoryCursorContainer
                cursorLabel={d =>
                  `${Math.round(d.x, 2)}, ${Math.round(d.y, 2)}`
                }
              />
            }
          >
            <VictoryLine
              style={{
                data: { stroke: "#c43a31",
                strokeWidth: 3,
                strokeLinecap: "round" },
                parent: { border: "3px solid #ccc" }
              }}
              interpolation="linear"
              data={this.state.data}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default CropSection;
