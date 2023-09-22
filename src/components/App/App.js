import Landing from "../screens/Landing/Landing";
import "./App.css";
import Header from "./children/Header/Header";

function App() {
  return (
    <div className="content-container">
      <Header />
      <main>
        <Landing />
      </main>
    </div>
  );
}

export default App;
