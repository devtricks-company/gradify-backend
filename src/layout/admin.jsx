import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { useHistory } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/nvabar/navbar";
import routes from "../routes";
import { Route, Switch, Redirect } from "react-router-dom";
import Students from "../views/student/Students";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
          
        return <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />;
      }
      return null;
    })}

    <Redirect from="/admin" to="/admin/student" />
  </Switch>
);

const Admin = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const history = useHistory();
  return (
    <div>
      {user ? (
        <div className="admin">
          <Navbar />
          <div className="layout">
            <Sidebar />
            <div className="main">
                {switchRoutes}
            </div>
          </div>
        </div>
      ) : (
        history.push("/login")
      )}
    </div>
  );
};

export default Admin;
