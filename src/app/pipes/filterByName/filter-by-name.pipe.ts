import { Pipe, PipeTransform, inject } from "@angular/core";
import { Product } from "../../services/product.service";
import { ProductsService } from "../../services/product.service";
import { HomeComponent } from "../../components/home/home.component";

@Pipe({
  name: "filterByName",
  pure: true,
})
export class FilterByNamePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return [];
    if (searchText == "") return items;

    searchText = searchText.toLowerCase();

    return items.filter((it) => {
      return it.toLowerCase().includes(searchText);
    });
  }
}
