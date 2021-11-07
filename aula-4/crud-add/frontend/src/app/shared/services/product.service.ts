import { HttpClient } from '@angular/common/http';
import { ProductData } from '../models/product-data.model';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: (isError) ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Erro!', true);
    return EMPTY;
  }

  read(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  readById(id: string): Observable<ProductData> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ProductData>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  create(product: ProductData): Observable<ProductData> {
    return this.http.post<ProductData>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  update(product: ProductData): Observable<ProductData> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<ProductData>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  delete(id: string): Observable<ProductData> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ProductData>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );;
  }
}
