import { Component } from '@angular/core';
import { User } from "./User";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'todotask',
    templateUrl: './AddUser.html',
})
export class AddUser {
    firstName: string = "";
    lastName: string = "";
    age: number = null;
    userList: User[] = [];
    constructor() {
    }

    addUser() {
        let newTask = new User(this.firstName, this.lastName, this.age);
        this.userList.push(newTask);
        this.firstName = "";
        this.lastName = "";
        this.age = null;
    }





}
