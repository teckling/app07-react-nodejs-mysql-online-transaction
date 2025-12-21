import logo from "./logo.svg";
import "./App.css";
import ServiceReportComponent from "./ServiceReportComponent";

function App() {
  const instruction = <div>This is an instruction const</div>;
  return (
    <div className="App">
      <header className="App-header">
        {instruction}
        <ServiceReportComponent />
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Hello World! Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
