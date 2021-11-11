import { TesteService } from "./teste.service";

describe('ValueService', () => {

    const nome = 'Lyndon Tavares'
    let service: TesteService;
    beforeEach(() => { service = new TesteService(); });

    it('#getNomeFromString deve retornar Lyndon Tavares', () => {
        expect(service.getNomeFromString()).toBe(nome)
    });

    it('#getNomeFromObservable deve retornar Lyndon Tavares do observable',
        (done: DoneFn) => {
            service.getNomeFromObservable().subscribe(value => {
                expect(value).toBe(nome);
                done();
            });
        });

    it('#getNomeFromPromise deve retornar Lyndon Tavares da promise',
        (done: DoneFn) => {
            service.getNomeFromPromise().then(value => {
                expect(value).toBe(nome);
                done();
            });
        });
});
