import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class RandomMessage {
    constructor(private http: Http) {
    }

    getRandomMessage(name: string) {
        //get response from nodejs server
        //we will use the new fancy observable object
        var observable = this.http.get("/msg?name=" + name);
        
        return observable
            .map(res => res.json())
            .map(obj => obj.msg + "");
    }
}

@Injectable()
/**
 * This service is a thin wrapper around Http, used to fetch a
 * list of ticker suggestions, given a search string.
 *
 * The service will automatically unwrap the response and return
 * an array of ticker objects.
 *
 * If the request fails once, the service will indiscriminately
 * retry the request with the same value.
 */
export class TickerLoader {
  constructor(private _http:Http) {}

  load(val:string):Observable<any[]> {
    return this._http
      .request(`/msg/stocks?symbol=${val}`)
      .retry(2)
      .map((res:Response) => <any[]>res.json());
  }
}