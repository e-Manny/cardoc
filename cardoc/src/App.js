// import styling and dependencies
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";

// import pages
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import VehicleView from "./pages/VehicleView";

// import components
import Navigation from "./components/Navigation";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <main>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/vehicle-view/:id/:year/:make/:model/:miles">
            <VehicleView />
          </Route>
        </main>
      </Router>
    </>
  );
  // return <HomePage></HomePage>;
  // return <Dashboard></Dashboard>;
  // return <VehicleView></VehicleView>;
}

export default App;
