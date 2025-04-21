import { Component, inject } from "@angular/core";
import { Product, ProductsService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { FormatPricePipe } from "../../pipes/formatPrice/format-price.pipe";

@Component({
  selector: "app-product",
  imports: [FormatPricePipe],
  template: `
    <div class="product">
      <h2 class="product-name">{{ products?.name }}</h2>
      <img src="{{ products?.photo }}" alt="Figurine Astérix" />
      <p class="product-price">Prix : {{ products?.price | formatPrice }} €</p>
      <p class="product-description">{{ products?.description }}</p>
      <div class="spacer"></div>
    </div>
  `,
  styles: `
  /* ===== Css Global ===== */
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Comfortaa';
  padding: 50px;
}

img {
  width: 500px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 8px 8px 5px 0 rgba(0,0,0,0.5);
}

img:hover {
  transform: scale(1.02);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.product-price {
    font-family: 'Comfortaa', Courier, monospace;
    font-weight: 800;
}

.product-name {
    color: #DA001E;
    font-size: 2em;
    font-family: 'bubbleboddy_neue';
}


/* ===== Responsive Mobile ===== */
@media (max-width: 768px) {
    img {
        width: 300px;
        height: 300px;
    }
}
`,
})
export class ProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  products: Product | undefined;
  productsId = Number(this.route.snapshot.params["id"]);

  constructor() {
    this.products = this.productsService.getProductsById(this.productsId);
  }
}
