import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { ApiService } from "./api.service";
import { User, UserListConfig } from "../models";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {

    constructor(
        private apiService: ApiService
    ) { }

    query(config: UserListConfig): Observable<{ users: User[], usserCount: number }> {
        const params: any = {};
        type keytype = keyof typeof config.filters;
        Object.keys(config.filters).forEach((key) => {
            if (config.filters[key as keytype] != '') {
                params[key] = config.filters[key as keytype];
            }
        });

        return this.apiService.get('/users?', new HttpParams({ fromObject: params }));
    }

    get(id: string): Observable<User> {
        return this.apiService.get('/users/' + id)
            .pipe(map(data => {
                return data;
            }));
    }
    destroy(id: string): Observable<User> {
        return this.apiService.delete('/users/' + id)
            .pipe(map(data => {
                return data;
            }));
    }

    save(user: User): Observable<User> {
        return this.apiService.post('/users', user)
            .pipe(map(data => {
                return data;
            }))
    }


}