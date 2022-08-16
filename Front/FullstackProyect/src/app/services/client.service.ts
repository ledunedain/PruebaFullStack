import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  /**
   * get all clients
   * @returns 
   */
  get() {
    const endpoint = `${base_url}/clients`;
    return this.http.get(endpoint);
  }

/**
 * save client
 * @param body 
 * @returns 
 */
   saveClient(body: any) {
    const endpoint = `${base_url}/save`;
    return this.http.post(endpoint, body);
  }
}
