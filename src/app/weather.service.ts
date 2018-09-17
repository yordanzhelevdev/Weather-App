import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
      APPID: "2ba88d6177e529c3dcb88d0666e36796"
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })  
    };

    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${params.APPID}/${params.lat},${params.lon}?units=si`, httpOptions);
  }
}
