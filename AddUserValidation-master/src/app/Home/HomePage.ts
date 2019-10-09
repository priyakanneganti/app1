import { Component } from '@angular/core';

@Component({
  selector: 'product',
  template: `<h1>{{welcomeMsg}}</h1>`,
})
export class HomePage  { 
        welcomeMsg = 'Welcome to home page'; 
}
