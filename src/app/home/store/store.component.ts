import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  store = [
    {
      Image: '../../../assets/images/store/5f4dc0f75da39620486623.jpg',
      h3: 'Depok',
      Paragraph:
        'Jl. Margonda Raya No.358, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423',
    },
    {
      Image: '../../../assets/images/store/6167f6f96e7c3348380394.jpg',
      h3: 'Tangerang',
      Paragraph:
        'Jl. Margonda Raya No.358, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423',
    },
    {
      Image: '../../../assets/images/store/5f4dc0c831bf5808064716.jpg',
      h3: 'Bogor',
      Paragraph: 'RT.03/RW.01, Paledang, Central Bogor, Bogor City,',
    },
    {
      Image: '../../../assets/images/store/5f4dc0429fb68640844198.jpg',
      h3: 'Bekasi',
      Paragraph:
        'Sentra Summarecon Bekasi Jl. Bulevard Ahmad Yani Blok M, Marga Mulya, Kec. Bekasi Tim., Kota Bks, Jawa Barat',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
