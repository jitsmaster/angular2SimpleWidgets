import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app';
import {TitlePane} from './Containers/TitlePane';
import {RandomMessage, TickerLoader} from './Services/Services';

bootstrap(AppComponent, [RandomMessage, TickerLoader, HTTP_PROVIDERS, ROUTER_PROVIDERS]);