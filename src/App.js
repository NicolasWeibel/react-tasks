import "./App.css";
import logo from "./images/logo-tasks.png";

function App() {
  return (
    <div className="App">
      <div className="container-logo-tasks">
        <img src={logo} className="logo-tasks" alt="Logo" />
      </div>
      <div className="tasks-main-list">
        <h1>My tasks</h1>
      </div>
    </div>
  );
}

export default App;
