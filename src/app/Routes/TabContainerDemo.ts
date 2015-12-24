import {Component} from 'angular2/core';
import {TabContainer, TabPane} from '../Containers/TabContainer';
import {TitlePane} from '../Containers/TitlePane';
@Component({
    template: `
    <h4>Tab Container Demo</h4>
    <aw-tabcontainer>
      <aw-tab title='Tab 1' active="true">
        Body 1
      </aw-tab>
      <aw-tab title='Tab 2'>
    <title-pane title="壳壳特别可爱">
        <p>但是她又懒又馋而且脾气大</p>
    </title-pane>
      </aw-tab>
      <aw-tab title='Tab 3'>
        Body 3
      </aw-tab>
    </aw-tabcontainer>
    `,
    directives: [TabContainer, TabPane, TitlePane]
})
export class TabContainerDemo {

}