import { URL_API } from '../_configs/global';

export const openwheatermapService = {
    getWeather
};

function getSingle(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
        //
    return fetch(`${URL_API}/completo/${id}`,requestOptions)
            .then(handleResponse);
}