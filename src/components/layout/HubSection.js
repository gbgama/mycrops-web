import React, { Component } from "react";
import Modal from "react-modal";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryCursorContainer
} from "victory";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#27AE60",
    borderColor: "#E67E22",
    borderWidth: 5
  }
};

class HubSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  componentDidMount() {
    const readings = this.props.readings;

    let dataTemp = [];
    let dataHum = [];

    readings.map(reading => {
      let value = {};
      value.x = readings.indexOf(reading);
      value.y = reading.airTemp;

      dataTemp.push(value);

      return true;
    });

    this.setState({ dataTemp: dataTemp });

    readings.map(reading => {
      let value = {};
      value.x = readings.indexOf(reading);
      value.y = reading.airHum;

      dataHum.push(value);

      return true;
    });

    this.setState({ dataHum: dataHum });
  }

  getFormatedDate = () => {
    let date = new Date(this.props.updateTime);

    let dateString = `${date.getUTCDay()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`;

    return dateString;
  };

  render() {
    return (
      <div className="hub">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Temperatura e umidade do ar"
          ariaHideApp={false}
        >
          <button
            style={{
              backgroundColor: "#E67E22",
              color: "white",
              fontWeight: "bold",
              marginBottom: "1em"
            }}
            className="btn"
            onClick={this.closeModal}
          >
            close
          </button>
          <div className="hubChartsContainer">
            <span style={{ fontWeight: "bold", color: "white" }}>
              Temperatura
            </span>
            <VictoryChart
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
                  data: {
                    stroke: "#c43a31",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                  },
                  parent: { border: "3px solid #ccc" }
                }}
                data={this.state.dataTemp}
              />
            </VictoryChart>
            <span style={{ fontWeight: "bold", color: "white" }}>Umidade</span>
            <VictoryChart
              theme={VictoryTheme.material}
              containerComponent={
                <VictoryCursorContainer
                  cursorLabel={d => `${Math.round(d.x)}, ${Math.round(d.y)}`}
                />
              }
            >
              <VictoryLine
                style={{
                  data: {
                    stroke: "#236088",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                  },
                  parent: { border: "3px solid #ccc" }
                }}
                data={this.state.dataHum}
              />
            </VictoryChart>
          </div>
        </Modal>
        <h1>{this.props.hubName}</h1>
        <div className="hubContainer">
          <section className="textSection">
            <span className="hubText">
              Temperatura: {this.props.airTemperature}&#8451;
            </span>
            <span className="hubText">Umidade: {this.props.airHumidity}%</span>
          </section>
          <section className="iconSection">
            <i className="fas fa-cloud-sun hubIcon" />
            <button
              onClick={this.openModal}
              type="button"
              className="btn btn-success hubBtn"
            >
              <i className="fas fa-chart-bar hubBtnIco" />
              gráficos
            </button>
          </section>
        </div>
        <h5>{this.getFormatedDate()}</h5>
      </div>
    );
  }
}

export default HubSection;
