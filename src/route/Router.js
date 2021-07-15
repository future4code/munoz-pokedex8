import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Components/Header/header"
import Home from '../Pages/Home';
import Pokedex from '../Pages/Pokedex';
import PokeDetails from '../Pages/PokeDetails';

export const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Header />
            <Home />
          </Route>
  
          <Route exact path={"/pokedex"}>
            <Header />
            <Pokedex />
          </Route>
  
          <Route exact path={"/:pokemon/details"}>
            <Header />
            <PokeDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    );
};