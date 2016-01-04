import {Component, EventEmitter, ChangeDetectionStrategy, Output} from 'angular2/core';
import {Control,  FORM_DIRECTIVES, NgFormControl, NgFor, NgIf} from 'angular2/common';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {RxPipe} from '../services/pipes/rx-pipe';
import {TickerLoader} from '../services/Services';

import 'rxjs/add/observable/from';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mapTo';

@Component({
  selector: 'aw-typeahead',
  templateUrl: 'app/Inputs/TypeAhead.html',
  directives: [FORM_DIRECTIVES, NgFor, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  pipes: [RxPipe],
  providers: [TickerLoader]
})
export class TypeAhead {
  @Output('selected') selected = new EventEmitter();
  clear = new EventEmitter();

  searchText = new Control();

  tickers: Observable<any[]>;
  
  selectedStock: string;

  constructor(http:Http, tickerLoader:TickerLoader) {
    // get a stream of changes from the tickers input
    this.tickers = Observable.from(<EventEmitter<any>>this.searchText.valueChanges)
      // wait for a pause in typing of 200ms then emit the last value
      .debounceTime(200)
      // only accept values that don't repeat themselves
      .distinctUntilChanged()
      // map that to an observable HTTP request, using the TickerLoad
      // service and switch to that
      // observable. That means unsubscribing from any previous HTTP request
      // (cancelling it), and subscribing to the newly returned on here.
      .switchMap((val:string) => tickerLoader.load(val))
      // send an empty array to tickers whenever clear emits by
      // merging in a the stream of clear events mapped to an
      // empty array.
      .merge(this.clear.mapTo([]));
  }

  onSelect(ticker){
    this.selected.next(ticker);
    this.selectedStock = ticker.symbol;
    this.clear.next('');
  }
}