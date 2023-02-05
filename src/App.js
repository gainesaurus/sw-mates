import React, { useState, useEffect } from 'react';
import { getCharacters, } from './Services/ApiClient';

import SelectorBox from './Components/SelectorBox/SelectorBox';
import SharedLists from './Components/SharedLists/SharedLists';
import Spinner from './Components/Spinner/Spinner';

import styles from './App.module.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [allCharacters, setAllCharacters] = useState([]);
  const [firstCharacter, setFirstCharacter] = useState(allCharacters[0]);
  const [otherCharacter, setOtherCharacter] = useState(allCharacters[0])


  useEffect(() => {
    getCharacters()
    .then(chars => {
      setAllCharacters(chars.map(char => {return { url: char.url, label: char.name, starships: char.starships, vehicles: char.vehicles}}))
      setIsLoading(false)});
  }, [SelectorBox]);


  return (
    !isLoading ? (
      <div className={styles.App}>
       <SelectorBox 
        allCharacters={allCharacters}
        firstCharacter={firstCharacter}
        setFirstCharacter={setFirstCharacter}
        otherCharacter={otherCharacter}
        setOtherCharacter={setOtherCharacter}
      />
      <section className={styles.compContainer}>
        <div className={styles.character}>
          {firstCharacter ? <h2>{firstCharacter.label}</h2> : null}
        </div>
        <div className={styles.listContainer}>
          {firstCharacter && otherCharacter ?
          <SharedLists
            firstCharacter={firstCharacter}
            otherCharacter={otherCharacter}
          />
          :
          null}
        </div>
        <div className={styles.character}>
          {otherCharacter ? <h2>{otherCharacter.label}</h2> : null}
        </div>
      </section>
      </div>
    )
    :
    <Spinner />
  );
}

export default App;
