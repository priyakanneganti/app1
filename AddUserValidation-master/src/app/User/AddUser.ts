import { Component } from '@angular/core';
import { User } from "./User";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'todotask',
    templateUrl: './AddUser.html',
})
export class AddUser {
    userID: string = "";
    userError:string="";
    ageError:string="";
    emailId: string = "";
    emailError: string = "";
    age: number = null;
    userList: User[] = [];
    constructor() {
    }
    validateEmail(email:string) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    addUser() {
        var error=false;
        var regex = new RegExp(/[-$%#@]/) ;
         
        if(regex.test(this.userID)){
            this.userError="Special characters  $ % # @ are not allowed.";
            error=true;
        }else{
            this.userError="";
        }
        if(!this.validateEmail(this.emailId)){
            this.emailError="Please enter a valid email address."
            error=true;
        }else{
            this.emailError="";
        }
         if(isNaN(this.age)){
            this.ageError="Age must be a number."
            error=true;
        }
        else if(this.age > 100 || this.age< 0){
            this.ageError="Age must be  between 1 and 100."
            error=true;
        } else{
            this.ageError="";
        }

        if(error){
            return;
        }else{
            this.userError=this.emailError=this.ageError="";
        }

        let newTask = new User(this.userID, this.emailId, this.age);
        this.userList.push(newTask);
        this.userID = "";
        this.emailId = "";
        this.age = null;
    }





}
