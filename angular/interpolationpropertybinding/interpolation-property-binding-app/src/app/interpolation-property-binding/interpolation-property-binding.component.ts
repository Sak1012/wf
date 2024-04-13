import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-property-binding',
  templateUrl: './interpolation-property-binding.component.html',
  styleUrls: ['./interpolation-property-binding.component.css']
})
export class InterpolationPropertyBindingComponent {

  // Component properties
  greeting: string = 'Hello';
  name: string = 'Angular';

  // Method to change the greeting
  changeGreeting() {
    this.greeting = 'Hi';
  }

  // Method to change the name
  changeName(newName: string) {
    this.name = newName;
  }
}
