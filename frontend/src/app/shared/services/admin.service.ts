import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { map, tap, take, catchError } from 'rxjs/operators';


import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
  } from '@angular/router';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AdminService {
 
    constructor(private http: HttpClient) {}


  /*      
     getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/users/${id}`);
    }
 */

    getExternals(page) {
        return this.http.get(environment.apiUrl+`/admin/get_externals?page=${page}`);
    }

    getUsers(page) {
        return this.http.get(environment.apiUrl+`/admin/get_users?page=${page}`);
    }
    
    
    getExternalById(id: number) {
        return this.http.get(environment.apiUrl+`/admin/get_external/${id}`);
    }

    deleteExternal(user) {
        if(confirm("Are you sure to delete user with email "+user.email)) {
            return this.http.delete(environment.apiUrl+`/admin/delete_external/${user._id}`);

        }
    } 

    deleteUser(user) {
        if(confirm("Are you sure to delete user with email "+user.email)) {
            return this.http.delete(environment.apiUrl+`/admin/delete_user/${user._id}`);

        }
    } 

    /*  update(user: User) {
        return this.http.put(`${config.apiUrl}/users/${user.id}`, user);
    }
    */
}

