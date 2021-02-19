import { HashRouter as Router, Route } from "react-router-dom";
import {Login} from '../src/components/Login';
import {Signup} from '../src/components/Signup';
import {Navbar} from '../src/components/Navbar';
import {LoggedScreen} from "./components/logged_screen";
import {AddProduct} from "./components/add_product";
import 'semantic-ui-css/semantic.min.css'
import './App.css';
function App() {
  return (
    <div className="App">
      <Router baseName="/">
      <Route exact path="/" component={Navbar}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/list" component={LoggedScreen}></Route>
      <Route exact path="/add" component={AddProduct}></Route>
      <Route exact path="/admin" component={AddProduct}></Route>
      </Router>
    </div>
  );
}

export default App;