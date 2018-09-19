import { Component } from "@angular/core";
import { GeolocationService } from "./geolocation.service";
import { WeatherService } from "./weather.service";
import { kmphToMs } from '../utilities/helpful';

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
  currentWindSpeed: string;
  weekly: Array<object>;
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
          this.currentWindSpeed = kmphToMs(weatherData["currently"]["windSpeed"]);
          this.currentHumidity = Math.round(weatherData['currently']['humidity'] * 100);
          this.weekly = weatherData['daily']['data'];
          console.table(this.weekly);
        });
    });
  }
}
