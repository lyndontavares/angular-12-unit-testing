import { TesteService } from "./teste.service";

/*
    Teste de Jasmine direto sem o suporte de teste do Angular
    https://angular.io/guide/testing-services
*/

describe('promise-observable', () => {

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

    /*
        https://testing-angular.com/testing-services/#testing-a-service-with-internal-state

        ❏ BehaviorSubject emite o valor atual para novos assinantes de forma síncrona

    */

    it('#getNomeFromBehaviorSubject deve retornar Lyndon Tavares do BehaviorSubject',
        () => {
            service.getNomeFromBehaviorSubject().subscribe(value => {
                expect(value).toBe(nome);
            })
            .unsubscribe();
            /*

             A Primeira Regra dos Observáveis ​​RxJS afirma: “Qualquer pessoa que se inscreve, deve cancelar a inscrição também”
             (reduz inscriçoes indesejadas)

            */
        }
    )

    it('#getNomeFromBehaviorSubject deve retornar Superman do BehaviorSubject',
        () => {
            service.setNomeToBehaviorSubject('Superman');
            service.getNomeFromBehaviorSubject().subscribe(value => {
                expect(value).toBe('Superman');
            })
            .unsubscribe();
        }
    )

    it('#setNomeToSubject deve retornar Batman do Subject',
        () => {
            service.setNomeToSubject('Batman');
            service.getNomeFromSubject().subscribe(value => {
                console.log(value);
                expect(value).toBe('Batman');
            })
        }
    )

});
