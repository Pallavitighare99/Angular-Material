import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient, private router: Router) { }
  saveuser(user: Register) {
    let body: any = user;
    let d = new Date();
    let hostUrl = 'http://localhost:3000/Data?v=' + d.toLocaleTimeString()
    this.http.post<Register>(hostUrl, body).subscribe(responseData => {
    }
    );
  }
}
