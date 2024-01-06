const NavigatorThings = () => {
  const successCallback = (position) => {
    console.log("Lattitude : ", position.coords.latitude);
    console.log("Longitude : ", position.coords.longitude);
  };

  const errorCallback = (error) => console.log("Error : ", error);

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return <div>Navigator</div>;
};

export default NavigatorThings;
