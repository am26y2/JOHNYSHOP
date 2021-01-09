import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SignIn from "./screens/SignIn";
function App() {
  return (
    <Router>
      <Header />
      <main class Name="py-3">
        <Container>
          {/* <Route exact path='/' component={SignIn}/> */}
          <Route exact path={`/product/:id`} component={ProductScreen}/>
          <Route exact path='/' component={HomeScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
