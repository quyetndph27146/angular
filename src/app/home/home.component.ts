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
  public districts: string[] = [];
  public vietNamData = [
    { city: 'Chọn thành phố', district: ['Quận huyện'] },
    { city: 'Hà Nội', district: ['Quốc Oai', 'Nam Từ Liêm', 'Bắc Từ Liêm'] },
    { city: 'Hồ Chí Minh', district: ['Quận 1', 'Quận 3', 'Quận 12'] },
  ];
  constructor() {}

  ngOnInit(): void {}

  public resetName(): void {
    this.age = 21;
  }

  public changeCity(event: any): void {
    const city = event.target.value;

    // cách 1
    // const search = this.vietNamData.filter((data) => data.city === city);
    // console.log('event', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // cách 2
    this.districts =
      this.vietNamData.find((data) => data.city === city)?.district || [];
  }
}
