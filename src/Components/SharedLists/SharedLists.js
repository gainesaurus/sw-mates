import { useState, useEffect } from 'react';
import { getPlanets } from '../../Services/ApiClient';
import Spinner from '../Spinner/Spinner';

import styles from './SharedLists.module.css';


const SharedLists = ({firstCharacter, otherCharacter}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [sharedPlanets, setSharedPlanets] = useState([]);
  const [sharedStarships, setSharedStarships] = useState([]);
  const [sharedVehicles, setSharedVehicles] = useState([]);
  const [sharedFilms, setSharedFilms] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPlanets()
    .then(planets => {
      setSharedPlanets(planets.filter(planet => planet.residents.includes(firstCharacter.url) && planet.residents.includes(otherCharacter.url)));
      setIsLoading(false);
    })
  }, [firstCharacter, otherCharacter])
  

  return firstCharacter === otherCharacter ? (
    <div className={styles.gifContainer}>
      <img src='https://media.tenor.com/9Wh6Y3c9PnIAAAAC/bh187-star-wars.gif' alt="angry sandperson" className={styles.gif}/>
      <h3>Don't compare the same characters, you Rebel Scum!</h3>
    </div>
  )
  :
  !isLoading ? (
    <section className={styles.container}>
      <ul>Have they ever been residents of the same planet?</ul>
      {sharedPlanets ? sharedPlanets.map(planet => 
        <li key={planet.url} className={styles.answer}>{planet.name}</li>) :
        <li className={styles.answer}>Nope</li>}

      <ul>Ever been on the same starship?</ul>
      {sharedStarships.length ? sharedStarships.map(ship =>
        <li key={ship.url} className={styles.answer}>{ship.name}</li>) :
        <li className={styles.answer}>I don't think so.</li>}

      <ul>Been on the same type of vehicle?</ul>
      {sharedVehicles.length ? sharedVehicles.map(vehicle =>
        <li key={vehicle.url} className={styles.answer}>{vehicle.name}</li>) :
        <li className={styles.answer}>Nuh uh</li>}

      <ul>You can see both of these nerfherders in the following films:</ul>
      {sharedFilms.length ? sharedFilms.map(film => <li key={film.url} className={styles.answer}>{film.name}</li>) : <li className={styles.answer}>Oops, no co-stars here.</li>}
    </section>
  )
  :
  <Spinner />
}

export default SharedLists;