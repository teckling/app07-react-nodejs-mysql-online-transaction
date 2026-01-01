import React from "react";
import "./ServiceReportComponent.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import FlashMessageComponent from "./FlashMessageComponent";

class ServiceReportComponent extends React.Component {
  validation = {
    customer_name: {
      rule: /^\S.{0,48}\S$/,
      message: "customer name should have 2-50 characters",
    },

    service_summary: {
      rule: /^\S.{0,78}\S$/,
      message: "customer name should have 2-80 characters",
    },
    service_completion: {
      rule: /^\d{4}-\d{2}-\d{2}$/,
      message: "date format should be yyyy-mm-dd",
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      customer_name: "",
      service_summary: "",
      service_completion: "",
      submittedAttempts: 0,
    };
    // bind 'this' to book object not the DOM object
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    for (let field in this.validation) {
      const rule = this.validation[field].rule;
      const message = this.validation[field].message;
      const value = this.state[field];

      if (!value.match(rule)) {
        this.setState({
          message: message,
          submittedAttempts: this.state.submittedAttempts + 1,
        });
        return false;
      }
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.validate()) {
      return;
    }
    let { customer_name, service_summary, service_completion } = this.state;
    const newServiceReport = {
      customer_name: customer_name,
      service_summary: service_summary,
      service_completion: service_completion,
    };
    axios
      .post(process.env.REACT_APP_SERVER_URL, newServiceReport)
      .then((result) => this.setState({ serviceReportCreated: true }))
      .catch((error) => console.log(error));
  }

  handleChange(event) {
    const name = event.target.name; // event.target is the name of the input control?
    const value = event.target.value; //
    this.setState({ [name]: value }); // 2. set the state with inputed values
  }
  render() {
    if (this.state.serviceReportCreated) {
      return <Navigate to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="customer_name">Customer Name</label>
          <input
            value={this.state.customer_name} // 3. input control show the value of state
            onChange={this.handleChange} // 1. onChange receive the text typed in
            type="text"
            name="customer_name"
            id="customer_name"
          />
          <label htmlFor="service_summary">Service Summary</label>
          <input
            value={this.state.service_summary}
            onChange={this.handleChange}
            type="text"
            name="service_summary"
            id="service_summary"
          />
          <label htmlFor="service_completion">Date</label>
          <input
            value={this.state.service_completion}
            onChange={this.handleChange}
            type="text"
            name="service_completion"
            id="service_completion"
          />
          <input type="submit" value="Save" />
          <FlashMessageComponent
            key={this.state.submittedAttempts}
            message={this.state.message}
            duration="3000"
          />
        </form>
      </div>
    );
  }
}

export default ServiceReportComponent;
