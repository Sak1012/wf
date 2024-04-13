import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayTemplateDrivenForm: boolean = false;
  displayReactiveForm: boolean = false;

  showTemplateDrivenForm() {
    this.displayTemplateDrivenForm = true;
    this.displayReactiveForm = false;
  }

  showReactiveForm() {
    this.displayReactiveForm = true;
    this.displayTemplateDrivenForm = false;
  }
}
