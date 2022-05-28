const key = "g0G8J3dZ4Qkhp9MgJQYtpN6A0IXck5Yf";

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const quary = `${id}?apikey=${key}`;
  const response = await fetch(base + quary);
  const data = await response.json();
  return data[0];
};

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const quary = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + quary);
  const data = await response.json();
  return data[0];
};
