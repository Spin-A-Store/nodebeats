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
var core_1 = require('@angular/core');
var application_log_service_1 = require("./application-log.service");
var application_log_list_component_1 = require("./application-log-list.component");
var shared_module_1 = require('../../../shared/shared.module');
var ApplicationLogModule = (function () {
    function ApplicationLogModule() {
    }
    ApplicationLogModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule],
            declarations: [application_log_list_component_1.ApplicationLogComponent],
            providers: [application_log_service_1.ApplicationLogService]
        }), 
        __metadata('design:paramtypes', [])
    ], ApplicationLogModule);
    return ApplicationLogModule;
}());
exports.ApplicationLogModule = ApplicationLogModule;
//# sourceMappingURL=application-log.module.js.map