import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    private usersUrl: string = 'https://reqres.in/api/users';

    constructor(private http: Http) {}

    getUsers() {
        return this.http.get(this.usersUrl + '')
            .map(res => res.json().data);
    }

}
