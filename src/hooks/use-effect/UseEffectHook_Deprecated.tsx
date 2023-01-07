import React from "react";

const UseEffectHook_Deprecated = () => {
  const [location, setLocation] = React.useState<GeolocationPosition>()

  React.useEffect(() => {
    let watchId = navigator.geolocation.watchPosition(handlePositionReceived);
    return function () { navigator.geolocation.clearWatch(watchId) };
  }, [])

  function handlePositionReceived(coordinates: GeolocationPosition) {
    setLocation(coordinates)
  }

  return (
    location ?
      <span >
        Latitude: {location.coords.latitude}
        <br />
        Longitude: {location.coords.longitude}
      </span >
      : <></>
  )
}

export default UseEffectHook_Deprecated;