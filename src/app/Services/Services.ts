import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

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