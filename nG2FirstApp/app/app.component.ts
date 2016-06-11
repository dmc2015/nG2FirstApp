//Import angular core so our component has access to the @Component decorator
import { Component } from '@angular/core';

//Decorator - tells angular what tempmlate to use, how to make the component
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})


export class AppComponent { }
