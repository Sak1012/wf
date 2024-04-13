import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  // Property to hold the input value
  inputValue: string = '';

  // Method to handle input changes
  handleInputChange() {
    console.log('Input value changed:', this.inputValue);
  }
}
