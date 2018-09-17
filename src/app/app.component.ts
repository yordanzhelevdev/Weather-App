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
          console.log(weatherData);
          this.cityName = weatherData["timezone"];
          this.currentTemp = weatherData["currently"]["temperature"];
          this.currentWindSpeed = weatherData["currently"]["windSpeed"];
          this.currentHumidity = weatherData['currently']['humidity'];
          console.log(this.currentTemp);
          console.log(this.cityName);
        });
    });
  }
}
