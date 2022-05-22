import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 private readonly base_url= environment.apiUrl;
  constructor(private _httpClient:HttpClient) { }
  addFormData(formData:any){
    return this._httpClient.post(`${this.base_url}data/add`, formData)
  }

  getFormData(){
    return this._httpClient.get(`${this.base_url}data/read`)
  }
}
