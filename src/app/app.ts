import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TitlePaneDemo} from "./Routes/TitlePaneDemo";
import {TabContainerDemo} from "./Routes/TabContainerDemo";

@Component({
    selector: 'aw-app',
    templateUrl: "app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/titlepane', name: 'TitlePane', component: TitlePaneDemo },
    { path: '/tabcontainer', name: 'TabContainer', component: TabContainerDemo }
])
export class AppComponent { }
