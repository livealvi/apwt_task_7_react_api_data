import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Post from "./components/Post/Post";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import UserDetails from "./components/UserDetails/UserDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/user-details/:userID">
          <UserDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
