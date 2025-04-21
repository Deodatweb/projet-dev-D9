import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  imports: [],
  template: `
    <div class="about">
      <h1 class="title-about">Au Petit Village</h1>
      <div class="about-content">
        <P
          ><span>“Au petit village”</span> est une entreprise qui confectionne
          des <strong>figurines</strong> inspirées de la bande dessinée
          <strong>Astérix et Obélix</strong>.</P
        >
        <p>
          L'entreprise a été créée en 2008 par un passionné d’histoire, de bande
          dessinée et de culture gauloise. Installée au cœur d’un petit village
          breton, elle valorise le savoir-faire artisanal local. Chaque figurine
          est sculptée et peinte à la main, avec un souci du détail
          remarquable.<br />
          Les personnages emblématiques tels qu’Astérix, Obélix ou encore Idéfix
          prennent vie en miniature. Les matériaux utilisés sont choisis avec
          soin pour garantir qualité et durabilité. Les créations s’adressent
          aux collectionneurs, aux amateurs de BD et aux touristes de passage.
          Fière de ses racines, l’entreprise participe aussi à des salons et
          expositions en France et à l’étranger.
        </p>
      </div>
    </div>
  `,
  styles: `
/* ===== Css Global ===== */  
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 150px;
  padding-right: 150px;
  padding-left: 150px;
}

p {
  font-family: 'Comfortaa';
  font-size: 1.5em;
  text-align: justify;   
}

p span {
  font-weight: bold;
}

strong {
  font-weight: normal;
}

/* ===== Responsive Tablette ===== */
@media (max-width: 1024px) {
  .about {
    padding: 80px;
  }

  p {
    font-size: 1.3em;
  }
}

/* ===== Responsive Mobile ===== */
@media (max-width: 768px) {
  .about {
    padding: 40px 20px;
  }

  p {
    font-size: 1.1em;
  }
}
`,
})
export class AboutComponent {}
