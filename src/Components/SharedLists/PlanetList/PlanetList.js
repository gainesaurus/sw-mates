import { useState, useEffect } from 'react';

const PlanetList = ({ firstCharacter, otherCharacter, allPlanets }) => {
  const [sharedPlanets, setSharedPlanets] = useState([]);

  useEffect(() => {
      setSharedPlanets(allPlanets.filter(planet => planet.residents.includes(firstCharacter.url) && planet.residents.includes(otherCharacter.url)));
  }, [firstCharacter, otherCharacter]);

  return (
    <>
      <h2>Have they ever been residents of the same planet? </h2>
      <ul>
        {sharedPlanets.length ? sharedPlanets.map(planet => 
        <li key={planet.url}>{planet.name}</li>) :
        <li style={{color: 'grey'}}>Nope</li>}
      </ul>
    </>
  )
}

export default PlanetList;