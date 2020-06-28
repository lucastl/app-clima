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

function App() {

  const [search, setSearch] = useState(null);
  const [result, setResult] = useState({});
  const [consult, setConsult] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultAPI = async () => {

      if (consult) {
        console.log(search);
        const url = `${GLOBAL.API_URL}${search.join()}&units=metric&appid=${GLOBAL.API_KEY}`;

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
    consultAPI();
    // eslint-disable-next-line
  }, [consult]);

  let component;
  if (error) {
    component = <Error mensaje="No se ha ingresado ningúna ciudad" />
  } else {
    component = <Home result={result} />
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
        <Route exact path="/favoritos" render={() => <Favorites title={'Favoritos'} />} />
        <Route exact path="/" render={() => component} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
