import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  prod = [
    {
      img: 'assets/prd1.png',
      text: 'Dog Food',
      background: 'rgba(83, 177, 117, 0.1)',
      border: '1px solid rgba(83, 177, 117, 0.7)',
    },
    {
      img: 'assets/prd2.png',
      text: 'Dog Treats',
      background: 'rgba(248, 164, 76, 0.1)',
      border: '1px solid rgba(248, 164, 76, 0.7)',
    },
    {
      img: 'assets/prd3.png',
      text: 'Dog Treatment',
      background: 'rgba(247, 165, 147, 0.25)',
      border: '1px solid #F7A593',
    },
    {
      img: 'assets/prd4.png',
      text: 'Dog Grooming',
      background: 'rgba(211, 176, 224, 0.25)',
      border: '1px solid #D3B0E0',
    },
    {
      img: 'assets/prd5.png',
      text: 'Dairy & Eggs',
      background: 'rgba(253, 229, 152, 0.25)',
      border: '1px solid #FDE598',
    },
    {
      img: 'assets/prd6.png',
      text: 'Beverages',
      background: 'rgba(183, 223, 245, 0.25)',
      border: '1px solid #B7DFF5',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
