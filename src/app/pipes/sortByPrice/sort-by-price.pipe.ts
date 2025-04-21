import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../../services/product.service";

@Pipe({
  name: "sortByPrice",
  pure: true,
})
export class SortByPricePipe implements PipeTransform {
  transform(
    value: Product[] | null,
    order: "none" | "lowest" | "biggest" = "lowest"
  ): Product[] {
    if (!value || value.length === 0) {
      return [];
    }

    if (order === "none") {
      return value;
    }

    return [...value].sort((a, b) => {
      const priceA = a.price ?? 0;
      const priceB = b.price ?? 0;

      return order === "lowest" ? priceA - priceB : priceB - priceA;
    });
  }
}
