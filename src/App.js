import Navigation from "./components/Drawer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatrProject from "./pages/CreatrProject";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg')`,
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Router>
        <Navigation >

        
        <Switch>
          <Route path="/create">
            <CreatrProject />
          </Route>
        </Switch>
        </Navigation>
      </Router>
    </div>
  );
}

export default App;
