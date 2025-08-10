const fetchWeatherData = async (location) => {
  const url = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?key=3UR3ZJQDXH38ABC3TSTXZ3M2Y`
  );
  if (url.ok) {
    const data = await url.json();
    console.log(data);
    const address = data.address;
    const temp = data.currentConditions.temp;
    const conditions = data.currentConditions.conditions;
    const humidity = data.currentConditions.humidity;
    const windspeed = data.currentConditions.windspeed;
    const iconType = data.currentConditions.icon;
    const objOfData = { address, temp, conditions, humidity, windspeed, iconType };
    return objOfData;
  } else {
    if (url.status === 400) {
      throw new Error(`Wrong Location`);
    } else if (url.status == 404) {
      throw new Error(`Empty Location`);
    } else {
      throw new Error(`${url.status}`);
    }
  }
};

export { fetchWeatherData };
