import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Historico } from "./historico-model";

@Injectable({
    providedIn: "root",
  })
export class HistoricoService{
  baseUrl = "http://localhost:8080/cadu-rest-api/historico";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
      }

      read(): Observable<Historico[]> {
        return this.http.get<Historico[]>(this.baseUrl).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
      }
    
      readById(id: number): Observable<Historico> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Historico>(url).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
      }

      errorHandler(e: any): Observable<any> {
        this.showMessage("Ocorreu um erro!", true);
        return EMPTY;
      }
}