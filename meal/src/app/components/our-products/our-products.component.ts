import { Component, OnInit } from "@angular/core";
import { products } from "../../mocks/index";
import { ApiService } from "src/app/services/api.service";
import { Observable } from "rxjs";
@Component({
  selector: "app-our-products",
  templateUrl: "./our-products.component.html",
  styleUrls: ["./our-products.component.scss"],
})
export class OurProductsComponent implements OnInit {
  our_products: Observable<any>;
  activeTab: any = "";
  categories: Set<String> = new Set();
  constructor(private api: ApiService) {
    this.our_products = this.api.getproducts();
  }

  ngOnInit(): void {
    // fetch categories
    this.our_products.subscribe((data) => {
      data.map((item) => this.categories.add(item.categorie));
      this.activeTab = [...this.categories][0];
    });
  }
}
