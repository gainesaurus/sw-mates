import { useState, useEffect } from 'react';
import { getCharacters, } from './Services/ApiClient';

import Spinner from './Components/Spinner/Spinner';

import styles from './App.module.css';
import React from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
    .then(chars => setAllCharacters(chars))
    .then(setIsLoading(false));
  }, [])


  return (
    !isLoading ? (
      <div className={styles.App}>
        <div className={styles.container}>
          <select>
            {allCharacters.map(char =>
              <option key={char.url} value={char}>
                {char.name}
              </option>
            )}
          </select>
          <select>
            {allCharacters.map(char =>
              <option key={char.url} value={char}>
                {char.name}
              </option>
            )}
          </select>
          <button>Compare</button>
        </div>
      </div>
    )
    :
    <Spinner />
  );
}

export default App;
