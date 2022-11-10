import CompList from "../components/compList";
import Scanner from "../components/scanner";

function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center py-8">
        Computer Check-in/Check-out System
      </h1>
      <div className="App">
        <div className="grid grid-cols-2 gap-4">
          <CompList />
          <Scanner />
        </div>
      </div>
    </div>
  );
}

export default Home;
