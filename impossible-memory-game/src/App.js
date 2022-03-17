import "./App.css";
import Gamedata from "./components/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Impossible Memory Card Game.</h1>
      </header>
      <section>
        {Gamedata.map((d) => (
          <p>{d.image}</p>
        ))}
      </section>
    </div>
  );
}

export default App;
