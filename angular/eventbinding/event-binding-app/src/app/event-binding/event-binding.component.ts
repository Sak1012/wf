import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  // Property to hold the button click count
  clickCount: number = 0;

  // Method to handle button click event
  handleClick() {
    this.clickCount++;
    console.log('Button clicked!', `Click count: ${this.clickCount}`);
  }

  // Method to handle input keyup event
  handleKeyup(event: KeyboardEvent) {
    console.log('Key up event detected!', `Key code: ${event.keyCode}`);
  }

  // Method to handle mouse enter event
  handleMouseEnter() {
    console.log('Mouse entered the button!');
  }

  // Method to handle mouse leave event
  handleMouseLeave() {
    console.log('Mouse left the button!');
  }
}
