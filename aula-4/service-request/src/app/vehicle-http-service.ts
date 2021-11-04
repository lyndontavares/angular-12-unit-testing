import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GroupVehiclesService } from './group-vehicle-service';
import { Vehicle, Manufacturer } from './group-vehicles-models';
import { Observable } from 'rxjs';

export const LIST_VEHICLE_URL = 'https://run.mocky.io/v3/e007ee78-f87f-4aea-be51-e794532f25d3';

class ResponseVehicleAPI {
    vehicles: Vehicle[];
}

@Injectable({
    providedIn: 'root'
})
export class VehicleHttpService {

    constructor(private http: HttpClient,
        private groupVehicles: GroupVehiclesService) { }

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
