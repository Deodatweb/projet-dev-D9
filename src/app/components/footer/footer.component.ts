import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  imports: [],
  template: `
    <footer>
      <div class="footer">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="./logoFacebook.png" alt="Logo de Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="./logoInstagram.png" alt="Logo d'Instagram" />
        </a>
        <a href="https://x.com/" target="_blank">
          <img src="./logoX.png" alt="Logo de Twitter/ X" />
        </a>
      </div>
    </footer>
  `,
  styles: `
/* ========== Css Global ========== */  
footer {
  background-color: #151217;
  display: flex;
  justify-content: center;
  padding: 30px;
}

/* ========== Conteneur des icônes ========== */
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 10%;
}

/* ===== Icônes ===== */
img {
  width: 40px;
  height: 40px;
}

/* ===== Responsive Tablette ===== */
@media (max-width: 1024px) {
  .footer {
    width: 50%;
  }
}

/* ===== Responsive Mobile ===== */
@media (max-width: 768px) {
  .footer {
    width: 80%;
    justify-content: center;
    gap: 30px;
  }
}

`,
})
export class FooterComponent {}
