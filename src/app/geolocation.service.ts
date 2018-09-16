import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GeolocationService {
  constructor() {}

  getCoordinates(): Observable<any> {
    return Observable.create(observer => {
      if (window.navigator && navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          pos => {
            observer.next(pos);
            observer.complete();
          },
          error => observer.error(error)
        );
      } else {
        observer.error("Unsupported browser");
      }
    });
  }
}
