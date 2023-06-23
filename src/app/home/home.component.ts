import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = 'QuyeTrang';
  public age = 21;
  public traiCay = ['Dâu Tây', 'Bơ', 'Sầu riêng'];
  public hoaQua = [
    { ten: 'Dâu Tây', price: 21, haGia: true },
    { ten: 'Bơ', price: 22, haGia: false },
    { ten: 'Sầu riêng', price: 12, haGia: true },
    { ten: 'Dưa hấu', price: -3, haGia: false },
  ];
  constructor() {}

  ngOnInit(): void {}

  public resetName(): void {
    this.age = 21;
  }
}
