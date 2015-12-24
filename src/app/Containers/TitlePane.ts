import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
  selector: 'title-pane',
  templateUrl: 'app/Containers/TitlePane.html',
  directives: [CORE_DIRECTIVES],
  properties: ["title"]
})

export class TitlePane {
  
  public visible: boolean;
  public open: EventEmitter<any>;
  public close: EventEmitter<any>;
  
  public title: string;
  
  public _oTitle: string;
  
  constructor(public http:Http) {
  //  constructor() {
    this.visible = false;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
  }
  
  toggle() {
    this.visible = ! this.visible;
    
    //get response from nodejs server
    //we will use the new fancy observable object
    var observable = this.http.get("/msg?name=booboo");
    
    //rxjs is broken with extended operator for current version, wait for later
    //updates to change it back
    /*
    observable
        .map(res => res.json())
        .map(obj => obj.msg + "")     
      .subscribe(
        msg => {
          if (!this._oTitle)
            this._oTitle = this.title;
            
          this.title = this._oTitle + " - Lucky Number: " + msg;   
        }
      ); */
      
   observable
      .subscribe(
        msg => {
          if (!this._oTitle)
            this._oTitle = this.title;            
          this.title = this._oTitle + " - Lucky Number: " + msg.json().msg;
        }
      );
    
    if (this.visible)
      this.open.next(null);
     else
     this.close.next(null);
  }
}