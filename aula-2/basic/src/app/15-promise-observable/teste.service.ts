import { BehaviorSubject, lastValueFrom, Observable, of, Subject } from "rxjs";

export class TesteService {

    private nome = 'Lyndon Tavares'
    private $nome = new BehaviorSubject<string>('Lyndon Tavares')
    private $nomeSub = new Subject<string>()

    getNomeFromString(): string {
        return this.nome;
    }

    getNomeFromPromise(): Promise<string> {
        //return of(this.nome).toPromise()  // rxjs 7
        return lastValueFrom(of(this.nome)) // rxjs 8
    }

    getNomeFromObservable(): Observable<string> {
        return of(this.nome)
    }

    getNomeFromBehaviorSubject(): Observable<string> {
        return this.$nome.asObservable()
    }

    setNomeToBehaviorSubject(nome) : void {
        this.$nome.next(nome)
    }

    getNomeFromSubject(): Observable<string> {
        return this.$nomeSub.asObservable()
    }

    setNomeToSubject(nome) : void {
        this.$nomeSub.next(nome)
    }

}
