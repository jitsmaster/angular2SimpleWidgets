import {Component} from 'angular2/core';
import {TypeAhead} from "../Inputs/TypeAhead";

@Component({
  template: `
  <aw-typeahead></aw-typeahead>
    `,
   directives: [TypeAhead]
})
export class TypeAheadDemo { }