import './index.css';
import Navbar from './components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import { Switch, Route } from 'react-router-dom';
//import ProductList from './components/ProductList';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar}/>
      <Switch>
        <Route exact path="/" component={Product}/>
        <Route path="/" component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
