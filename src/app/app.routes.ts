import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ProductComponent } from "./components/product/product.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "product/:id",
    component: ProductComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
