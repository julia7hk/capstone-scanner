import "./App.css";
import CompList from "./components/compList";
import Scanner from "./components/scanner";

function App() {
  return (
    <div>
      <h1>Computer Check-in/Check-out System</h1>
      <div className="App">
        <div>
          <CompList />
          <Scanner />
        </div>
      </div>
    </div>
  );
}

export default App;
