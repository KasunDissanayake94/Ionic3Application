import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public http: HttpClient) {
  }

  getAllArticles() {
    //   return this.http.get('http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key' +
    //       '=e10c7683cae1474051fb275de242c610&user=joanofarctan&format=json').pipe(map((res: any) => {
    //   console.log('res', res);
    //   return res;
    // }));

          return this.http.get('http://jsonplaceholder.typicode.com/photos').pipe(map((res: any) => {
      console.log('res', res);
      return res;
    }));
  }
}
