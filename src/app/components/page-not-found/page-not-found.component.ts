import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-page-not-found",
  imports: [RouterLink],
  template: `
    <h2>Page 404 – Intrus détecté chez les Gaulois !</h2>
    <p>
      Ouille ! Même Obélix ne retrouve pas cette page… Elle a dû se perdre en
      allant affronter les Romains.<br />
      Pas de panique, tu peux retourner à l’accueil ou explorer les autres
      sentiers du village !
    </p>
    <a routerLink="/">Retour à l'accueil</a>
  `,
  styles: `
    /* ===== Css Global ===== */
    h2 {
      color: #DA001E;
    }

    p {
      font-family: 'Comfortaa', sans-serif;
    }

    a {
      text-decoration: none;
      color: #DA001E;
    }
  
  `,
})
export class PageNotFoundComponent {}
