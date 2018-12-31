import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  getter(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(map(res => res));
  }
}
