import { Component, OnInit } from "@angular/core";
import { products } from "../../mocks/index";
@Component({
  selector: "app-our-products",
  templateUrl: "./our-products.component.html",
  styleUrls: ["./our-products.component.scss"],
})
export class OurProductsComponent implements OnInit {
  our_products = products;
  activeTab: any = "";
  categories: Set<String> = new Set();
  constructor() {}

  ngOnInit(): void {
    // fetch categories
    this.our_products.map((item) => this.categories.add(item.categorie));
    this.activeTab = Array.from(this.categories)[0];
  }
}
