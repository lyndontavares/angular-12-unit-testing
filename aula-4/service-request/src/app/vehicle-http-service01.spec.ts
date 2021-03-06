
import { TestBed } from '@angular/core/testing';
import { VehicleHttpService } from './vehicle-http-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LIST_VEHICLE_URL } from './vehicle-http-service';
import { Manufacturer, Vehicle } from './group-vehicles-models';


describe('Service: VehicleHttp', () => {
    let service: VehicleHttpService;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [VehicleHttpService],
            imports: [HttpClientTestingModule]
        });

        service = TestBed.get(VehicleHttpService);
        httpController = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return a list of Vehicles', () => {
        const dummyResponse = {
            vehicles: [{
                id: 1,
                name: 'Veiculo 01',
                manufacturer: 'manufacturer',
                image: 'http://images.com',
                year: '2020',
                description: 'Dummy vehicle 01',
            }, {
                id: 2,
                name: 'Veiculo 02',
                manufacturer: 'manufacturer',
                image: 'http://images.com',
                year: '2020',
                description: 'Dummy vehicle 02',
            }]
        };

        service.getVehicles().subscribe((response: Manufacturer) => {
            expect(response.vehicles.length).toEqual(2);
            expect(response.vehicles[0].name).toEqual('Veiculo 01');
            expect(response.vehicles[1].name).toEqual('Veiculo 02');
        });

        const req = httpController.expectOne(LIST_VEHICLE_URL);
        expect(req.request.method).toBe('GET');

        req.flush(dummyResponse);

    });

    afterEach(() => {
        httpController.verify();
    });
});
