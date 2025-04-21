import { Component, OnInit, inject } from "@angular/core";
import { Product, ProductsService } from "../../services/product.service";
import { ProductItemComponent } from "../product-item/product-item.component";
import { SortByPricePipe } from "../../pipes/sortByPrice/sort-by-price.pipe";

@Component({
  selector: "app-home",
  imports: [ProductItemComponent, SortByPricePipe],
  template: `
    <main>
      <h1>Au Petit Village</h1>

      <div class="presentation">
        <P
          ><span>“Au petit village”</span> est une entreprise qui confectionne
          des <strong>figurines</strong> inspirées de la bande dessinée
          <strong>Astérix et Obélix</strong>.</P
        >
      </div>

      <div class="filter-bar">
        <div class="search-bar">
          <input type="text" placeholder="Filtrer par nom" #filter />
          <button type="button" (click)="filterResults(filter.value)">
            Recherche
          </button>
        </div>

        <div class="sort-bar">
          <p class="search-bar_sort">Trier par ordre :</p>
          <button (click)="sortByLowest()">Croissant</button>
          <button (click)="sortByBiggest()">Décroissant</button>
        </div>
      </div>

      <div class="products">
        @for(product of filteredProductsList | sortByPrice: sortOrder ; track
        product) {

        <app-product-item [product]="product"></app-product-item>
        }
      </div>
    </main>
  `,
  styles: `
/* ===== Css Global ===== */
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    font-family: 'Comfortaa';
    text-align: center;
}

h1 {
    font-family: 'bubbleboddy_neue';
    font-size: 3.5em;
    color: #DA001E;
}

p span {
  font-weight: bold;
}

.presentation {
    font-size: 1.5em;
    padding-bottom: 50px;
}

strong {
    font-weight: normal;
}

img {
    width: 300px;
    height: 300px;
}

.products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 60%;
    padding: 20px;
}

.filter-bar {
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color:#FDD90B;
    gap: 20px;
    padding: 15px;
}

.sort-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.search-bar_sort {
    font-family: 'bubbleboddy_neue';
}

button {
    font-family: 'bubbleboddy_neue';
    border-radius: 5px;
    background-color: #151217; /*#DA001E;*/
    border-color: #f9d0a3; /*#FDD90B;*/
    color: #f9d0a3; /*#FDD90B;*/
    margin-left: 5px;
    box-shadow: 8px 8px 10px 0px rgba(0,0,0,0.75);
}

/* ===== Responsive Mobile ===== */
@media (max-width: 768px) {
    .presentation {
        width: 400px;
    }
}

/* ===== Responsive Tablette ===== */
@media (min-width: 769px) {
    .presentation {
        width: 600px;
    }
}
/* ===== Responsive Desktop ===== */
@media (min-width: 1024px) {
    .presentation {
        width: 1000px;
    }
}
`,
})
export class HomeComponent {
  public products: Product[] = [];
  productsList: Product[] = [];
  productsService = inject(ProductsService);
  filteredProductsList: Product[] = [];

  constructor(private service: ProductsService) {
    this.productsList = this.productsService.getProducts();
    this.filteredProductsList = this.productsList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProductsList = this.productsList;
      return;
    }

    this.filteredProductsList = this.productsList.filter((products) =>
      products?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  sortOrder: "none" | "lowest" | "biggest" = "none";

  sortByLowest() {
    this.sortOrder = "lowest";
  }

  sortByBiggest() {
    this.sortOrder = this.sortOrder === "biggest" ? "lowest" : "biggest";
  }
}
