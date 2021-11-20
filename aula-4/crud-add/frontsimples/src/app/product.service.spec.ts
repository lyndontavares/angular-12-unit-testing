import { TestBed } from "@angular/core/testing";
import { ProductService } from "./product.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from "@angular/material/snack-bar";
import { ProductData } from "./product-data.model";

describe(' Teste do service ProductService', () => {
    let httpController: HttpTestingController;
    let service: ProductService;
    let matSnackBar: MatSnackBar;
    let matSnackBarStub: Partial<MatSnackBar> = {
        open: () => { return null }
    };

    const produtosDummy = [
        {
            id: 1,
            name: 'Produto 1',
            price: 100,
            quantity: 10
        },
        {
            id: 2,
            name: 'Produto 2',
            price: 200,
            quantity: 20
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MatSnackBarModule
            ],
            providers: [
                ProductService,
                { provide: MatSnackBar, useValue: matSnackBarStub }
            ]
        });
        service = TestBed.inject(ProductService);
        matSnackBar = TestBed.inject(MatSnackBar);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('deverá criar o serviço ProductService', () => {
        expect(service).toBeTruthy();
    });

    it('deverá testar showMessage default', () => {
        const matSnackBarSpy = spyOn(matSnackBar, 'open')
        service.showMessage('Mostrar Informação default');
        expect(matSnackBarSpy).toHaveBeenCalled();

        service.showMessage('Mostrar Informação Info',false);
        expect(matSnackBarSpy).toHaveBeenCalled();

        service.showMessage('Mostrar Informação Erro',true);
        expect(matSnackBarSpy).toHaveBeenCalled()

    })

    it('Deverá testar o método erroHandler', () => {

        const matSnackBarSpy = spyOn(matSnackBar, 'open')
        service.errorHandler(new Error('Erro'));
        expect(matSnackBarSpy).toHaveBeenCalled()

    })

    it('deverá testar o método read', () => {
        //preaparação
        let produtosApi: ProductData[];
        //execução
        service.read().subscribe(result => {
            produtosApi = result;
        });
        const request = httpController.expectOne(service.baseUrl);
        request.flush(produtosDummy); // retorna um array de produtos dummy
        //verificação
        expect(request.request.method).toBe('GET');
        expect(produtosApi.length).toBe(2);
    })

    it('deverá testar o método read - exceção', () => {
        //preaparação
        const matSnackBarSpy = spyOn(matSnackBar, 'open')
        let produtosApi: ProductData[];
        //execução
        service.read().subscribe(result => {
            produtosApi = result;
        });
        const request = httpController.expectOne(service.baseUrl);
        request.flush("Something went wrong", {
            status: 404,
            statusText: "Network error"
        }); // retorna um array de produtos dummy
        //verificação
        expect(matSnackBarSpy).toHaveBeenCalled();
    })

    it('deverá testar o método readById', () => {
        //preaparação
        let produtosApi: ProductData;
        //execução
        service.readById('1').subscribe(result => {
            produtosApi = result;
        });
        const request = httpController.expectOne(service.baseUrl+'/1');
        request.flush(produtosDummy[0]); // retorna um array de produtos dummy
        //verificação
        expect(request.request.method).toBe('GET');
        expect(produtosApi).toEqual(produtosDummy[0]);
    })

    it('deverá testar o método readById - exceção', () => {
        //preaparação
        const matSnackBarSpy = spyOn(matSnackBar, 'open')
        let produtosApi: ProductData;
        //execução
        service.readById('1').subscribe(result => {
            produtosApi = result;
        });
        const request = httpController.expectOne(service.baseUrl + '/1');
        request.flush("Something went wrong", {
            status: 404,
            statusText: "Network error"
        }); // retorna um array de produtos dummy
        //verificação
        expect(matSnackBarSpy).toHaveBeenCalled();
    })

    it('deverá testar o método create', () => {
        //preaparação
        let produtosApi: ProductData;
        //execução
        service.create(produtosDummy[0]).subscribe(result => {
            produtosApi = result;
        });
        const request = httpController.expectOne(service.baseUrl);
        //verificação
        expect(request.request.method).toBe('POST');
    })

    it('deverá testar o método create - exceção', () => {
        //preaparação
        let produtosApi: ProductData;
        const matSnackBarSpy = spyOn(matSnackBar, 'open')
        //execução
        service.create(produtosDummy[0]).subscribe(result => {
            produtosApi = result;
        });
        const request = httpController.expectOne(service.baseUrl);
        request.flush("Something went wrong", {
            status: 404,
            statusText: "Network error"
        });
        //verificação
        expect(matSnackBarSpy).toHaveBeenCalled();
    })

})
