import Product from "./products/product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import ShopContextProvider from "./context/shopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Product />}></Route>
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </Router>
        </ShopContextProvider>
        

    </div>
  );
}

export default App;
