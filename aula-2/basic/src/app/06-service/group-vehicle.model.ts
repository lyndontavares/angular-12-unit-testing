export class Vehicle {
    id: number;
    name: string;
    manufacturer: string;
    image: string;
    year: number;
    description: string;
}

export class Manufacturer {
    manufacturer: string;
    vehicles: Vehicle[];
}
