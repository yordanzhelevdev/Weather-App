import { Component, OnInit } from "@angular/core";
import { GeolocationService } from "./geolocation.service";
import { WeatherService } from "./weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  latitude: number;
  longitude: number;
  cityName: string;
  currentTemp: number;
  currentHumidity: number;
  currentWindSpeed: number;
  country: string;
  erroMessage: string;

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.geolocationService.getCoordinates().subscribe(result => {
      console.log(result);
      this.latitude = result.coords.latitude;
      this.longitude = result.coords.longitude;
      this.weatherService
        .getTheWeather(this.latitude, this.longitude)
        .subscribe(weatherData => {
          this.cityName = weatherData["city"]["name"];
          this.country = weatherData["city"]["country"];
          this.currentTemp = weatherData.list[0]["main"]["temp"];
          this.currentHumidity = weatherData.list[0]["main"]["humidity"];
          this.currentWindSpeed = weatherData.list[0]["wind"]["speed"];
          console.log(this.currentTemp);
          console.log(this.cityName);
        });
    });
  }
}
