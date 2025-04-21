import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="nav">
      <div class="nav_logo">
        <a routerLink="/">
          <img class="logo" src="./Logo_au petit village.jpg" alt="Logo" />
        </a>
      </div>

      <div
        class="burger"
        [ngClass]="{ toggle: isMenuOpen }"
        (click)="toggleMenu()"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav_menu" [ngClass]="{ active: isMenuOpen }">
        <a routerLink="/" (click)="closeMenu()">Accueil</a>
        <a routerLink="/about" (click)="closeMenu()">À propos</a>
        <a routerLink="/contact" (click)="closeMenu()">Contact</a>
      </div>

      <!-- Overlay qui ferme le menu quand on clique à l'extérieur -->
      <div class="overlay" *ngIf="isMenuOpen" (click)="closeMenu()"></div>
    </section>
  `,
  styles: [
    `
      /* ===== Css Global ===== */
      .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #151217;
        padding: 10px;
        position: relative;
        z-index: 1000;
      }

      .nav_logo img {
        width: 7vw;
      }

      .nav_menu {
        display: flex;
        gap: 20px;
      }

      .nav_menu a {
        color: #f9d0a3;
        text-decoration: none;
        text-transform: uppercase;
        font-family: "Comfortaa", sans-serif;
        padding: 0 10px;
        font-weight: bold;
        transition: font-size 0.3s ease;
      }

      .burger {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        z-index: 1001;
      }

      .burger span {
        width: 30px;
        height: 3px;
        background-color: #f9d0a3;
        transition: all 0.3s ease;
      }

      /* ===== Animations ===== */
      .burger.toggle span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .burger.toggle span:nth-child(2) {
        opacity: 0;
      }

      .burger.toggle span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }

      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 900;
      }

      /* ===== Responsive Mobile ===== */
      @media (max-width: 768px) {
        .burger {
          display: flex;
        }

        .nav_menu {
          display: none;
          flex-direction: column;
          align-items: center;
          position: fixed;
          top: 60px;
          left: 0;
          width: 100vw;
          background-color: #151217;
          padding: 20px 0;
          z-index: 999;
        }

        .nav_menu.active {
          display: flex;
        }

        .nav_menu a {
          font-size: 14px;
          padding: 10px 0;
        }

        .nav_logo img {
          width: 14vw;
        }
      }

      /* ===== Responsive Tablette ===== */
      @media (min-width: 768px) and (max-width: 1024px) {
        .nav_menu {
          display: flex !important;
          flex-direction: row;
          gap: 20px;
          position: static;
          background: none;
        }

        .burger {
          display: none;
        }

        .nav_menu a {
          font-size: 16px;
        }

        .nav_logo img {
          width: 10vw;
        }
      }

      /* ===== Responsive Desktop ===== */
      @media (min-width: 1024px) {
        .nav_menu a {
          font-size: 18px;
        }

        .nav_logo img {
          width: 7vw;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
