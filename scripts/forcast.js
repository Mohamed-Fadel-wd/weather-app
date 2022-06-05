class Forecast {
  constructor() {
    this.key = "gCGDl9PuD7GGfVmUbi2wje7d8BtGeU0x";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);
    return { cityDets, weather };
  }
  async getCity(city) {
    const quary = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + quary);
    const data = await response.json();
    return data[0];
  }
  async getWeather(id) {
    const quary = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + quary);
    const data = await response.json();
    return data[0];
  }
}
