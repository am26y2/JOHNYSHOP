import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen";
import ProductScreen from "./screens/productScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path={`/product/:id`} component={ProductScreen}/>
          <Route exact path='/' component={HomeScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
