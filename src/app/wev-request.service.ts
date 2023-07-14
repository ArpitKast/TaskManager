import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WevRequestService {

  readonly ROOT_URL:any; 

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000'
  }

  get(uri:string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  // post(uri:string, payload:object){
  //   return this.http.post(`${}`)
  // }
}
