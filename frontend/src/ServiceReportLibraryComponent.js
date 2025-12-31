import React from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./ServiceReportLibraryComponent.css";

class ServiceReportLibraryComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceReportState: [],
    };
  }

  componentDidMount() {
    axios(process.env.REACT_APP_SERVER_URL)
      .then((result) => this.setState({ serviceReportState: result.data }))
      .catch((error) => console.log(error));
  }

  render() {
    let reports = this.state.serviceReportState.map((report) => {
      return (
        <tr key={report.id}>
          <td>{report.customer_name}</td>
          <td>{report.service_summary}</td>
          <td>{report.service_completion.toString().substr(0, 10)}</td>
          <td>
            <EditIcon />
          </td>
          <td>
            <DeleteForeverIcon />
          </td>
        </tr>
      );
    });
    // console.log(index, report);
    // console.log("render", this.state.serviceReportState);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Service Summary</th>
              <th>Service Completion</th>
            </tr>
          </thead>
          <tbody>{reports}</tbody>
        </table>
      </div>
    );
  }
}
export default ServiceReportLibraryComponent;
