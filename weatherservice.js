class WeatherService {
    static getForecast() {
      return Array.from({ length: 5 }, (_, index) =>
        WeatherService.getForecastForDate(new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000))
      );
    }
  
    static getForecastForDate(date) {
      const temp = WeatherService.getRandomInt(-30, 55);
      const summary = WeatherService.getSummary(temp);
      return new WeatherForecast(date, temp, summary);
    }
  
    static getSummary(temp) {
      if (temp > 40) {
        return "Scorching";


    }
  
    static getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  
  class WeatherForecast {

  
    get temperatureF() {
      return 32 + Math.round(this.temperatureC / 0.5556);
    }
}

module.exports = { WeatherService, WeatherForecast };
