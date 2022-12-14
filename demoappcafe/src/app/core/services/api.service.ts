import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Observable, throwError } from "rxjs";

import { catchError } from "rxjs";

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient
    ) { }

    private formatErrors(error: any) {
        return throwError(() => error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.api_url_v1}${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(`${environment.api_url_v1}${path}`, JSON.stringify(body))
            .pipe(catchError(this.formatErrors));
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${environment.api_url_v1}${path}`, JSON.stringify(body))
            .pipe(catchError(this.formatErrors));
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${environment.api_url_v1}${path}`)
            .pipe(catchError(this.formatErrors));
    }

}