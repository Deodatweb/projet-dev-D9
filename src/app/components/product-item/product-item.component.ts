import { Component, input } from "@angular/core";
import { Product } from "../../services/product.service";
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";
import { FormatPricePipe } from "../../pipes/formatPrice/format-price.pipe";

@Component({
  selector: "app-product-item",
  imports: [RouterModule, FormatPricePipe],
  template: `
    <a [routerLink]="['/product', product().id]">
      <div class="product-item">
        <h2 class="product-item_name">{{ product().name }}</h2>
        <img src="{{ product().photo }}" alt="Photo d'une figurine" />
        <div class="product-item_price">
          Prix : {{ product().price | formatPrice }} €
        </div>
      </div>
    </a>
  `,
  styles: `
  /* ===== Css Global ===== */
.product-item {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 8px 8px 5px 0 rgba(0,0,0,0.5);
}
h2 {
  font-family: 'bubbleboddy_neue';
}
img {
  width: 350px;
  height: 350px;
}

.product-item_price {
  font-family: 'Comfortaa', monospace;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: #151217;
}

`,
})
export class ProductItemComponent {
  product = input.required<Product>();

  constructor(private router: Router) {}
  navigateToProductDetails() {
    this.router.navigateByUrl("product/:id");
  }
}
