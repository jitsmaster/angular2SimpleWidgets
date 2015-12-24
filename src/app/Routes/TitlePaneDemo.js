System.register(['angular2/core', "../Containers/TitlePane"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, TitlePane_1;
    var TitlePaneDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TitlePane_1_1) {
                TitlePane_1 = TitlePane_1_1;
            }],
        execute: function() {
            TitlePaneDemo = (function () {
                function TitlePaneDemo() {
                }
                TitlePaneDemo = __decorate([
                    core_1.Component({
                        template: "\n  <div>\n    <title-pane title=\"\u58F3\u58F3\u7279\u522B\u53EF\u7231\">\n        <p>\u4F46\u662F\u5979\u53C8\u61D2\u53C8\u998B\u800C\u4E14\u813E\u6C14\u5927</p>\n    </title-pane>\n  </div>\n    ",
                        directives: [TitlePane_1.TitlePane]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TitlePaneDemo);
                return TitlePaneDemo;
            }());
            exports_1("TitlePaneDemo", TitlePaneDemo);
        }
    }
});
//# sourceMappingURL=TitlePaneDemo.js.map