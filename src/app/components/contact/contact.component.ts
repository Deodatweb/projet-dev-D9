import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  imports: [],
  template: `
    <div class="contact">
      <h1>Nous contacter</h1>
      <p>Vous pouvez nous contacter par mail ou sur les réseaux sociaux :</p>

      <div class="contact_info">
        <a href="mailto:contact@aupetitvillage.com" class="mail"
          >contact&#64;aupetitvillage.com</a
        >

        <div class="contact_links">
          <a href="https://www.facebook.com/">
            <img src="./logoFacebook.png" alt="Logo de Facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="./logoInstagram.png" alt="Logo d'Instagram" />
          </a>
          <a href="https://x.com/">
            <img src="./logoX.png" alt="Logo de Twitter/ X" />
          </a>
        </div>
      </div>
      <div class="spacer"></div>
    </div>
  `,
  styles: `
/* ===== Css Global ===== */
.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-right: 150px;
    padding-left: 150px;
}
a {
    color:#DA001E;
}

p {
    font-family: 'Comfortaa';
    font-size: 1.5em;
    text-align: center;
}

.contact_info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 1.5em;
}

.mail {
    display: flex;
    justify-content: center;
}
.contact_links {
    display: flex;
    justify-content: center;
    align-content: space-around;
    width: 90%;
}

img {
    width: 50px;
    height: 50px;
}

.spacer {
    height: 150px;
}

/* ===== Responsive Tablette (<=1024px) ===== */
@media (max-width: 1024px) {
    .contact {
        padding: 80px;
    }

    .contact_info {
        font-size: 1.3em;
    }

    img {
        width: 40px;
        height: 40px;
    }
}

/* ===== Responsive Mobile (<=768px) ===== */
@media (max-width: 768px) {
    .contact {
        padding: 50px 20px;
    }

    .contact_info {
        font-size: 1.1em;
        gap: 20px;
    }

    p {
        font-size: 1.2em;
    }

    img {
        width: 35px;
        height: 35px;
    }

    .spacer {
        height: 100px;
    }
}
`,
})
export class ContactComponent {}
