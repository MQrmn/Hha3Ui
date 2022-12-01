import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {}

    get<T>(uri: string)
    {
      return this.http.get<T>(uri);
    }

    get2<T>(uri: string, params: any){
      return this.http.get<T>(uri, params);
    }
}
