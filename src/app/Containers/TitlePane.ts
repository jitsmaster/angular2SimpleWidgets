import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';
import {RandomMessage} from "../Services/Services"

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

    constructor(public randomMsg: RandomMessage) {
        //  constructor() {
        this.visible = false;
        this.open = new EventEmitter();
        this.close = new EventEmitter();
    }

    toggle() {
        this.visible = !this.visible;

        var o = this.randomMsg.getRandomMessage("test_booboo");
        o.subscribe(
            msg => {
                if (!this._oTitle)
                    this._oTitle = this.title;
                this.title = this._oTitle + " - Lucky Number: " + msg
            });

        if (this.visible)
            this.open.next(null);
        else
            this.close.next(null);
    }
}