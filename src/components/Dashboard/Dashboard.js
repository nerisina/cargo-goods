import React, { Component } from "react";
import Card from "./Card/Card";
import Filter from "./Filter/Filter";
import Data from "../../data/shipment";
import Aux from "../../hoc/Aux";

class Dashboard extends Component {
  state = {
    data: Data,
    filter: "",
  };

  handleChange = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <Aux>
        <Filter handleChange={this.handleChange} filter={filter}  />
        <div className="flex flex-wrap justify-between ml5 mr5 mt4">
          {filteredData.map((shipment, index) => (
            <Card key={index} {...shipment} />
          ))}
        </div>
      </Aux>
    );
  }
}

export default Dashboard;
