import React from "react";
import Header from "./_common/header";
import HomePage from "./public/homePage";
import About from "./public/aboutPage";
import Menu from "./public/menuPage";
import NotFoundPage from "./public/notFoundPage";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <Header />
      <br />
      <Container maxWidth="false">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={About} />
          <Route path="/menu" exact component={Menu} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
