import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { GroupVehicleService } from '../06-service/group-vehicle.service';
import { Manufacturer, Vehicle } from '../06-service/group-vehicle.model';

export const LIST_VEHICLE_URL = 'https://run.mocky.io/v3/e007ee78-f87f-4aea-be51-e794532f25d3';

class ResponseVehicleAPI {
  vehicles: Vehicle[];
}

@Injectable({
  providedIn: 'root'
})
export class VehicleHttpService {

  constructor(private http: HttpClient,
    private groupVehicles: GroupVehicleService) { }

  getVehicles() {
    return this.http.get(LIST_VEHICLE_URL);
  }

  getAgroupedVehicles(): Observable<Manufacturer[]> {
    return this.http.get(LIST_VEHICLE_URL)
      .pipe(map((response: ResponseVehicleAPI) => {
        return this.groupVehicles.groupByManufacturer(response.vehicles);
      }));
  }
}
