import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Admin from "./layout/admin";
import Login from "./layout/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin  />
        </Route>
        <Route path="/login">
          <Login  />
        </Route>
        <Redirect from='/' to="/admin/student" />
      </Switch>
    </Router>
  );
}

export default App;
