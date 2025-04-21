import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatPrice",
  standalone: true,
})
export class FormatPricePipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value === undefined || value === null) return "";
    return value.toFixed(2).replace(".", ",");
  }
}
