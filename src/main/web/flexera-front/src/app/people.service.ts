import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  constructor(private http: HttpClient) {}

  private peopleUrl = 'http://localhost:8080/people';


  public getPeople() {
    return this.http.get<any[]>(this.peopleUrl);
  }

  public delete(people) {
    return this.http.delete(this.peopleUrl, people);
  }

  public create(people) {
    return this.http.post<any>(this.peopleUrl, people);
  }

  public alter(people) {
    return this.http.put<any>(this.peopleUrl, people);
  }

}
