import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app';
import {TitlePane} from './Containers/TitlePane';
import {RandomMessage} from './Services/Services';

bootstrap(AppComponent, [RandomMessage, HTTP_PROVIDERS, ROUTER_PROVIDERS]);