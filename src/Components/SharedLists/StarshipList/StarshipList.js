import { useEffect, useState } from 'react';

const StarshipList = ({ firstCharacter, otherCharacter, allStarships }) => {
  const [sharedStarships, setSharedStarships] = useState([]);

  useEffect(() => {
      setSharedStarships(allStarships.filter(ship => ship.pilots.includes(firstCharacter.url) && ship.pilots.includes(otherCharacter.url)));
  }, [firstCharacter, otherCharacter])

  return (
    <>
      <h2>Ever flown on the same type of starship?</h2>
      <ul>
        {sharedStarships.length ? sharedStarships.map(ship =>
        <li key={ship.url}>{ship.name}</li>) :
        <li style={{color: 'grey'}}>I don't think so.</li>}
      </ul>
    </>
  )
}

export default StarshipList;