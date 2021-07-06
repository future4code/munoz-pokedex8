import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Pokedex from '../Pages/Pokedex';
import PokeDetails from '../Pages/PokeDetails';

export const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
  
          <Route exact path={"/pokedex"}>
            <Pokedex />
          </Route>
  
          <Route exact path={"/pokemon/details"}>
            <PokeDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    );
};