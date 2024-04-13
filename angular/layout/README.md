# Layout

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

Sure, here's how you can create multiple components in Angular and compose them together:

1. **Header Component**: Create a new Angular component for the header.

   ```bash
   ng generate component header
   ```

2. **Sidebar Component**: Create a new Angular component for the sidebar.

   ```bash
   ng generate component sidebar
   ```

3. **Footer Component**: Create a new Angular component for the footer.

   ```bash
   ng generate component footer
   ```

4. **App Component**: Compose the Header, Sidebar, and Footer components together in the AppComponent template.
   - Modify `app.component.html`:
     ```html
     <app-header></app-header>
     <app-sidebar></app-sidebar>
     <router-outlet></router-outlet>
     <!-- This is where other components will be loaded -->
     <app-footer></app-footer>
     ```

This setup will create the required components and compose them together in the `AppComponent` template to form the layout of a webpage. You can then customize each component's template and styles as needed. Let me know if you need further assistance!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
