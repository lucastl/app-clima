import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from '../_components/Home';
import Favorites from '../_components/Favorites';
import Header from '../_components/Header';

function App() {
  return (
    <BrowserRouter>
        <Header
          title={'CLIMA'}
        />
        <Switch>
          <Route exact path="/favoritos" render={() => <Favorites title={'Favoritos'} />} />
          <Route exact path="/" render={() => <Home title={'Inicio'} />} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
