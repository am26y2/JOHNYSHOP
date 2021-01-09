import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <Router>
      <Header />
      <main class Name="py-3">
        <Container>
          <Route  path={`/product/:id`} component={ProductScreen}/>
          <Route exact path='/' component={HomeScreen}/>
          <Route  path='/cart/:id?' component={CartScreen}/>
        
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
