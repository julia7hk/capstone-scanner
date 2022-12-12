import CompList from "../components/compList";
import Scanner from "../components/scanner";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function logOut() {
    signOut(auth);
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-4xl text-center py-8">
        Computer Check-in/Check-out System
      </h1>
      <div className="App">
        <button
          onClick={() => {
            logOut();
          }}
        >
          Sign Out
        </button>
        <div className="grid grid-cols-2 gap-4">
          <CompList />
          <Scanner />
        </div>
      </div>
    </div>
  );
}

export default Home;
