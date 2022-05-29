const key = "gCGDl9PuD7GGfVmUbi2wje7d8BtGeU0x";

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
