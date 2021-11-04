import { GroupVehiclesService } from './group-vehicle-service';

const JsonData = [{
    id: 0,
    name: 'Carro Nissan 0',
    manufacturer: 'Nissan',
    image: 'https://i.picsum.photos/id/10/640/360.jpg',
    year: 2002,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus.'
},
{
    id: 1,
    name: 'Carro Jeep 1',
    manufacturer: 'Jeep',
    image: 'https://i.picsum.photos/id/11/640/360.jpg',
    year: 2003,
    description: 'Pellentesque vitae rhoncus nibh, ac finibus ex. '
},
{
    id: 2,
    name: 'Carro Nissan 2',
    manufacturer: 'Nissan',
    image: 'https://i.picsum.photos/id/12/640/360.jpg',
    year: 2007,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus.'
},
{
    id: 3,
    name: 'Carro Jeep 3',
    manufacturer: 'Jeep',
    image: 'https://i.picsum.photos/id/13/640/360.jpg',
    year: 2002,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus.'
}];

describe('Service: GroupVehicles', () => {
    let service: GroupVehiclesService;

    beforeEach(() => {
        service = new GroupVehiclesService();
    });

    it('should group vehicles by manufacturer', () => {
        const groupedVehicles = service.groupByManufacturer(JsonData);

        const nissan = groupedVehicles.find((group) => group.manufacturer === 'Nissan');
        const jeep = groupedVehicles.find((group) => group.manufacturer === 'Jeep');

        expect(nissan.vehicles.length).toEqual(2);
        expect(jeep.vehicles.length).toEqual(2);
    });
});
