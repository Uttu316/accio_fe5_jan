const locationPromise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (data) => onSuccess(data, resolve),
    (error) => onError(error, reject),
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
});

function onSuccess(data, resolve) {
  console.log(data);
  const { coords } = data;
  const { longitude, latitude } = coords;
  resolve({
    longitude,
    latitude,
  });
}
function onError(error, reject) {
  console.log(error);
  reject("Location not available");
}

locationPromise
  .then((coords) => {
    const { latitude, longitude } = coords;

    const div = document.createElement("div");
    div.innerHTML = `Latitude: ${latitude} Longitude: ${longitude}`;

    document.body.appendChild(div);
  })
  .catch((e) => {
    const div = document.createElement("div");
    div.innerHTML = e;
    document.body.appendChild(div);
  });
