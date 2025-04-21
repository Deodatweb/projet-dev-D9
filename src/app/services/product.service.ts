import { Injectable } from "@angular/core";

export type Product = {
  name: string;
  photo: string;
  price: number;
  description: string;
  id: number;
};

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  products: Product[] = [
    {
      name: "Figurine Astérix",
      id: 1,
      photo: "./figurine-asterix-embleme.jpg",
      price: 44.99,
      description:
        "Figurine emblématique du personnage Astérix faite à la main.",
    },
    {
      name: "Figurine Obélix et Idéfix",
      id: 2,
      photo: "./figurine-obelix-et-idefix.jpg",
      price: 42.99,
      description:
        "Figurine du personnage Obélix avec son chien Idéfix faite à la main.",
    },
    {
      name: "Figurine Bonemine",
      id: 5,
      photo: "./figurine-bonemine-la-femme-du-chef-du-village.jpg",
      price: 35.99,
      description:
        "Figurine du personnage Bonemine la femme du chef du village faite à la main.",
    },
    {
      name: "Figurine Abraracourcix",
      id: 8,
      photo: "./figurine-abraracourcix-le-chef-du-village.jpg",
      price: 32.99,
      description:
        "Figurine du personnage Abraracourcix le chef du village faite à la main.",
    },
  ];
  getProducts() {
    return this.products;
  }

  getProductsById(id: number): Product | undefined {
    return this.products.find((products) => products.id === id);
  }
}
