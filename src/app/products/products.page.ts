import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  backHome() {
    this.route.navigate(['tabnav']);
  }
}
