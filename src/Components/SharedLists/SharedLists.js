import PlanetList from './PlanetList/PlanetList';
import StarshipList from './StarshipList/StarshipList';
import VehicleList from './VehicleList/VehicleList';
import FilmList from './FilmList/FilmList';

import styles from './SharedLists.module.css';


const SharedLists = ({ firstCharacter, otherCharacter, allPlanets, allStarships, allVehicles, allFilms }) => {

  return firstCharacter !== otherCharacter ? 
    (<section className={styles.container}>
      <PlanetList 
        firstCharacter={firstCharacter}
        otherCharacter={otherCharacter}
        allPlanets={allPlanets}
      />

      <StarshipList
        firstCharacter={firstCharacter}
        otherCharacter={otherCharacter}
        allStarships={allStarships}
      />

      <VehicleList
        firstCharacter={firstCharacter}
        otherCharacter={otherCharacter}
        allVehicles={allVehicles}
      />

      <FilmList
        firstCharacter={firstCharacter}
        otherCharacter={otherCharacter}
        allFilms={allFilms}
      />
    </section>
  )
  :
  <div className={styles.gifContainer}>
    <img src='https://media.tenor.com/9Wh6Y3c9PnIAAAAC/bh187-star-wars.gif' alt="angry sandperson" className={styles.gif}/>
    <h3>Don't compare the same characters, you Rebel Scum!</h3>
  </div>
}

export default SharedLists;