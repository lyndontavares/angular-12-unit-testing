import { Injectable } from '@angular/core';
import { Vehicle, Manufacturer } from './group-vehicles-models';

@Injectable({
  providedIn: 'root'
})
export class GroupVehiclesService {

  constructor() { }

  groupByManufacturer(vehiclesList: Vehicle[]): Manufacturer[] {
    const result = [];

    vehiclesList.forEach((vehicle) => {
      const alreadyExist = result.findIndex((item) => item.manufacturer === vehicle.manufacturer);

      if (alreadyExist !== -1) {
        result[alreadyExist].vehicles.push(vehicle);
      } else {
        result.push({
          manufacturer: vehicle.manufacturer,
          vehicles: [vehicle]
        });
      }
    });
    return result;
  }
}
