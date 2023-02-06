import { useEffect, useState } from 'react';

import { getFilms } from '../../../Services/ApiClient';


const FilmList = ({ firstCharacter, otherCharacter }) => {
  const [sharedFilms, setSharedFilms] = useState([]);

  useEffect(() => {
    getFilms()
    .then(films => {
      setSharedFilms(films.filter(film => film.characters.includes(firstCharacter.url) && film.characters.includes(otherCharacter.url)));
    })
  }, [firstCharacter, otherCharacter])

  return (
    <>
      <h2>You can see both of these nerfherders in the following films:</h2>
      <ul>
        {sharedFilms.length ? sharedFilms.map(film => <li key={film.url}>{film.title} - {film.release_date.slice(0,4)}</li>) : <li style={{color: 'grey'}}>Oops, no co-stars here.</li>}
      </ul>
    </>
  )
}

export default FilmList;