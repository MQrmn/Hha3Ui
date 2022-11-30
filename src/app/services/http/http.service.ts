import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {}

    get(uri: string)
    {
      this.http.get(uri).subscribe(response => {
        console.log(response)
      })
    }
}
