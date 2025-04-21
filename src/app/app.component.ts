import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <body>
      <app-header />
      <router-outlet />
      <app-footer />
    </body>
  `,
  styles: [
    `
      body {
        background-color: #f9d0a3;
      }
    `,
  ],
})
export class AppComponent {
  title = "projet-dev-D9";
}
