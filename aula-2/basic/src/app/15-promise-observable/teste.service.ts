import { lastValueFrom, Observable, of } from "rxjs";

export class TesteService {

    private nome = 'Lyndon Tavares'

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
}
