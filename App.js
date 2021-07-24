import React from "react";
import AboutUs from "./page/AboutUs";
import "./Styles/app.scss";
import Nav from "./Components/Nav";
import ContactUs from "./page/ContactUs";
import OurWork from "./page/OurWork";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./page/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
export default App;
