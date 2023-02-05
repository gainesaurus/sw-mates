const BASE_URL = 'https://swapi.dev/api/';

export const getCharacters = async () => {
  let charArr = [];
  let pageNum = 1;
  while (pageNum < 9) {
    let chars = await fetchRequest(`people/?page=${pageNum}`)
    charArr = [...charArr, ...chars.results];
    pageNum++;
  };
  return charArr;
};

export const getPlanets = async () => {
  let planetArr = [];
  let pageNum = 1;
  while (pageNum < 7) {
    let planets = await fetchRequest(`planets/?page=${pageNum}`)
    planetArr = [...planetArr, ...planets.results];
    pageNum++;
  };
  return planetArr;
};

export const getHomeworldById = (id) => fetchRequest(`planets/${id}`);
export const getStarshipById = (id) => fetchRequest(`starships/${id}`);
export const getVehicleById = (id) => fetchRequest(`vehicles/${id}`);
export const getFilmById = (id) => fetchRequest(`films/${id}`);

const fetchRequest = (url) => {
  return fetch(`${BASE_URL}/${url}`)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });
};
