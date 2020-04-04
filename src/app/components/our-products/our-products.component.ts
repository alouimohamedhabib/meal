import { Component, OnInit } from '@angular/core';
import { products } from '../../mocks/index';
@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit {

  our_products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
