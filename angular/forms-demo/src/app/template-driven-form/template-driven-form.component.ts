import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  model: any = {};

  onSubmit() {
    console.log('Template-Driven Form Submitted:', this.model);
  }
}
