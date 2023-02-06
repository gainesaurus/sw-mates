import { useEffect, useState } from 'react';

const VehicleList = ({ firstCharacter, otherCharacter, allVehicles }) => {
  const [sharedVehicles, setSharedVehicles] = useState([]);

  useEffect(() => {
      setSharedVehicles(allVehicles.filter(vehicle => vehicle.pilots.includes(firstCharacter.url) && vehicle.pilots.includes(otherCharacter.url)));
  }, [firstCharacter, otherCharacter])

  return (
    <>
      <h2>Ever cruised in the same type of vehicle?</h2>
      <ul>
        {sharedVehicles.length ? sharedVehicles.map(vehicle =>
        <li key={vehicle.url}>{vehicle.name}</li>) :
        <li style={{color: 'grey'}}>Nuh uh</li>}
      </ul>
    </>
  )
}

export default VehicleList;