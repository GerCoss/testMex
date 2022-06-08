import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/product/:id" element={<Product/>} />
          <Route path="*" element={ <NotFoundPage/> }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
