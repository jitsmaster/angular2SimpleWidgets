import {Component} from 'angular2/core';
import {TitlePane} from "../Containers/TitlePane";

@Component({
  template: `
  <div>
    <title-pane title="壳壳特别可爱">
        <p>但是她又懒又馋而且脾气大</p>
    </title-pane>
  </div>
    `,
   directives: [TitlePane]
})
export class TitlePaneDemo { }