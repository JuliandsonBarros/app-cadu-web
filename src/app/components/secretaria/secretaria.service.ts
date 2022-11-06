import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Secretaria } from "./secretaria-model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SecretariaService {
  baseUrl = "http://localhost:8080/cadu-rest-api/secretarias";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(secretaria: Secretaria): Observable<Secretaria> {
    return this.http.post<Secretaria>(this.baseUrl, secretaria).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Secretaria[]> {
    return this.http.get<Secretaria[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Secretaria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Secretaria>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(secretaria: Secretaria): Observable<Secretaria> {
    const url = `${this.baseUrl}/${secretaria.id_secretaria}`;
    return this.http.put<Secretaria>(url, secretaria).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Secretaria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Secretaria>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
