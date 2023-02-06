const BASE_URL = 'https://swapi.dev/api/';

export const getCharacters = async () => {
  let charArr = [];
  let pageNum = 1;
  try {
    while (pageNum < 9) {
      let chars = await fetchRequest(`/people/?page=${pageNum}`)
      charArr = [...charArr, ...chars.results];
      pageNum++;
    };
    return charArr;
  } catch (err) {
    console.log(`${err.message} while fetching /people/?page=${pageNum}`)
  }
 
};

export const getPlanets = async () => {
  let planetArr = [];
  let pageNum = 1;
  try {
    while (pageNum < 7) {
      let planets = await fetchRequest(`/planets/?page=${pageNum}`)
      planetArr = [...planetArr, ...planets.results];
      pageNum++;
    };
    return planetArr;
  } catch (err) {
    console.log(`${err.message} while fetching /planets/?page=${pageNum}`)
  };
};

export const getStarships = async () => {
  let shipsArr = [];
  let pageNum = 1;
  try {
    while (pageNum < 5) {
      let ships = await fetchRequest(`/starships/?page=${pageNum}`)
      shipsArr = [...shipsArr, ...ships.results];
      pageNum++;
    };
    return shipsArr;
  } catch (err) {
    console.log(`${err.message} while fetching /starships/?page=${pageNum}`)
  };
};

export const getVehicles = async () => {
  let vehicleArr = [];
  let pageNum = 1;
  try {
    while (pageNum < 5) {
      let vehicles = await fetchRequest(`/vehicles/?page=${pageNum}`)
      vehicleArr = [...vehicleArr, ...vehicles.results];
      pageNum++;
    };
    return vehicleArr;
  } catch (err) {
    console.log(`${err.message} while fetching /vehicles/?page=${pageNum}`)
  };
};

export const getFilms = async () => {
  try {
    let films = await fetchRequest(`/films`);
    return films.results;
  } catch (err) {
    console.log(`${err.message} while fetching /films/`)
  };
};




const fetchRequest = (url) => {
  return fetch(`${BASE_URL}/${url}`)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });
};
