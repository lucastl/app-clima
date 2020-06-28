import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../_components/Home';
import Favorites from '../_components/Favorites';

function App() {

  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Resultados</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/favoritos" render={() => <Favorites title={'Favoritos'} />} />
          <Route exact path="/" render={() => <Home title={'Inicio'} />} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
