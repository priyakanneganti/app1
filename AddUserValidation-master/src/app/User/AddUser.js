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
var core_1 = require("@angular/core");
var User_1 = require("./User");
var AddUser = (function () {
    function AddUser() {
        this.userID = "";
        this.userError = "";
        this.ageError = "";
        this.emailId = "";
        this.emailError = "";
        this.age = null;
        this.userList = [];
    }
    AddUser.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    AddUser.prototype.addUser = function () {
        var error = false;
        var regex = new RegExp(/[-$%#@]/);
        if (regex.test(this.userID)) {
            this.userError = "Special characters  $ % # @ are not allowed.";
            error = true;
        }
        else {
            this.userError = "";
        }
        if (!this.validateEmail(this.emailId)) {
            this.emailError = "Please enter a valid email address.";
            error = true;
        }
        else {
            this.emailError = "";
        }
        if (isNaN(this.age)) {
            this.ageError = "Age must be a number.";
            error = true;
        }
        else if (this.age > 100 || this.age < 0) {
            this.ageError = "Age must be  between 1 and 100.";
            error = true;
        }
        else {
            this.ageError = "";
        }
        if (error) {
            return;
        }
        else {
            this.userError = this.emailError = this.ageError = "";
        }
        var newTask = new User_1.User(this.userID, this.emailId, this.age);
        this.userList.push(newTask);
        this.userID = "";
        this.emailId = "";
        this.age = null;
    };
    return AddUser;
}());
AddUser = __decorate([
    core_1.Component({
        selector: 'todotask',
        templateUrl: './AddUser.html',
    }),
    __metadata("design:paramtypes", [])
], AddUser);
exports.AddUser = AddUser;
//# sourceMappingURL=AddUser.js.map