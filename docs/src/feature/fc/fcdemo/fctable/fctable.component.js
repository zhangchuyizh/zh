import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description:表格
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:29:17
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let FctableComponent = class FctableComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
FctableComponent = tslib_1.__decorate([
    Component({
        selector: 'fctable',
        templateUrl: './fctable.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], FctableComponent);
export { FctableComponent };
//# sourceMappingURL=fctable.component.js.map