import Products from "./components/Products";
import Product from "./components/Product";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Products/>
    // </div>
    <Router>
      <div>
        <Switch>
          <Route path="/product/:id" component={(props) => (<Product {...props} /> )} />
          <Route path="/" exact component={(props) => (
            <Products/>
          )}
          />
          <Route>404 page</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
