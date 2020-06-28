import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { GLOBAL } from '../_configs/global';

import Home from '../_components/Home';
import Favorites from '../_components/Favorites';
import Header from '../_components/Header';
import Error from '../_components/Error';

function App(props) {

  const [search, setSearch] = useState(null);
  const [result, setResult] = useState({});
  const [consult, setConsult] = useState(false);
  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const consultAPI = async (idCities) => {

      if (consult) {
        const url = `${GLOBAL.API_URL}${idCities.join()}&units=metric&appid=${GLOBAL.API_KEY}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result);
        setConsult(false);

        // Detecta si hubo resultados correctos en la consulta

        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }

    }
    consultAPI(search);
    // eslint-disable-next-line
  }, [consult]);

  useEffect(() => {
    const { pathname, search } = window.location;

    const searchFormat = search.slice(1).split(',');

    if (pathname === '/compartir') {

      const consultShared = async (idCities) => {

        const url = `${GLOBAL.API_URL}${idCities.join()}&units=metric&appid=${GLOBAL.API_KEY}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result);
        setSearch(searchFormat);

        // Detecta si hubo resultados correctos en la consulta

        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }

      }
      consultShared(searchFormat);

    }

  }, []);

  let component;
  if (error) {
    component = <Error mensaje="No se ha ingresado ningúna ciudad" />
  } else {
    component = <Home result={result} favorites={favorites} setFavorites={setFavorites} search={search} />
  }

  return (
    <BrowserRouter>
      <Header
        title={'CLIMA'}
        setSearch={setSearch}
        search={search}
        setConsult={setConsult}
        setError={setError}
      />
      <Switch>
        <Route exact path="/favoritos" render={() => <Favorites title={'Favoritos'} favorites={favorites} setFavorites={setFavorites} />} />
        <Route path={`/compartir`} render={() => component} />
        <Route exact path="/" render={() => component} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
