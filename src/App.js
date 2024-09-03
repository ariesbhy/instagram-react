import "./App.css";
import "./assets/css/instagram.css";
import Home from "./components/Home";

function App() {
  let instaName = "Basmah's instagram";
  return (
    <div className="container">
      <h1>{instaName}</h1>
      <Home />
    </div>
  );
}

export default App;
