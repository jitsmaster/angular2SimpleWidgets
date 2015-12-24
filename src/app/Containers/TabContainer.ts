import {Component, Directive, Input, QueryList,
ViewContainerRef, TemplateRef, ContentChildren} from 'angular2/core';
/*@Directive({
    selector: '[aw-pane]'
})
export class TabPane {
    @Input() title: string;
    private _active: boolean = false;
    constructor(public viewContainer: ViewContainerRef,
        public templateRef: TemplateRef) { }
    @Input() set active(active: boolean) {
        if (active == this._active) return;
        this._active = active;
        if (active) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.remove(0);
        }
    }
    get active(): boolean {
        return this._active;
    }
}
*/

@Component({
    selector: 'aw-tab',
    inputs: [
        'title',
        'active'
    ],
    template: `
    <div [style.display] = "shown">
      <ng-content></ng-content>
    </div>
  `
})
export class TabPane {
    title: string;
    _active: boolean;

    shown: string = "none";

    constructor() {
    }

    @Input() set active(active: boolean) {
        if (active == this._active) return;
        this._active = active;
        this.shown = active ? "" : "none";
    }

    get active(): boolean {
        return this._active;
    }
}

@Component({
    selector: 'aw-tabcontainer',
    templateUrl: "app/Containers/TabContainer.html",
})
export class TabContainer {
    /*add(pane: TabPane) {
        if (pane)
            this.panes.push(pane);
    }

    panes: Array<TabPane> = [];*/

    @ContentChildren(TabPane) panes: QueryList<TabPane>;

    select(pane: TabPane) {
        this.panes.toArray().forEach((p: TabPane) => p.active = p == pane);
    }
}