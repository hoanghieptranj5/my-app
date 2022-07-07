import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/axios">Axios</Link> |{" "}
      <Link to="/calculate-electric-page">Page</Link> |{" "}
      <Link to="/table">Table</Link>
    </div>
  );
}

export default App;
