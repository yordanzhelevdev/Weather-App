import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getTheWeather(lat, long): Observable<any> {
    const params = {
      lat: lat,
      lon: long,
      APPID: "06367deba23da7ef9b2d282dbdf9b964",
      units: "metric"
    };
    return this.http.get("http://api.openweathermap.org/data/2.5/forecast", {
      params: params
    });
  }
}
