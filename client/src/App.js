import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";



import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import GoogleMaps from "./GoogleMaps";



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}






const App = () => (
  <Provider store={store}>
  <Router>
  <div className=" mainContainer">
    <Navbar />
    <Route exact path="/" component={Landing} />

    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Switch>
    <PrivateRoute exact path="/dashboard" component={Dashboard} />  
    <GoogleMaps />

    </Switch>
 
  </div>

  </Router>
  </Provider>
);

export default App;
