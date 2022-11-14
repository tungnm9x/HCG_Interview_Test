import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getList(query: any) {
    return of([
      {
        id: 1,
        imageUrl:
          'https://gaspa.vn/wp-content/uploads/2022/06/1707x1707-scaled.jpg',
        name: 'Rose Sleeping Mask – 50g',
        price: 388000,
      },
      {
        id: 2,
        imageUrl: 'https://gaspa.vn/wp-content/uploads/2022/06/KCN-scaled.jpeg',
        name: 'Kem Chống Nắng Sunflower SPF 50+ PA++++ 30g',
        price: 488000,
      },
      {
        id: 3,
        imageUrl:
          'https://gaspa.vn/wp-content/uploads/2022/06/Collagen-mask-scaled.jpeg',
        name: 'KEVA MASK Collagen – 25g',
        price: 1110000,
      },
      {
        id: 4,
        imageUrl:
          'https://gaspa.vn/wp-content/uploads/2022/06/Body-ngay-scaled.jpeg',
        name: 'Kem Dưỡng Ngày Lotus Body Whitening – 150g',
        price: 150000,
      },
    ]).pipe(delay(500));
  }

  getCategories() {
    return of([
      {
        id: 0,
        name: 'Tất cả',
        quantity: 5,
      },
      {
        id: 1,
        name: 'Mỹ phẩm trang điểm',
        quantity: 5,
      },
      {
        id: 2,
        name: 'Nước hoa',
        quantity: 1,
      },
      {
        id: 3,
        name: 'Sản phẩm trị nám',
        quantity: 7,
      },
      {
        id: 4,
        name: 'Kem mát xa',
        quantity: 10,
      },
      {
        id: 5,
        name: 'Sản phẩm chống lão hóa',
        quantity: 3,
      },
      {
        id: 6,
        name: 'Sản phẩm khác',
        quantity: 2,
      },
    ]).pipe(delay(500));
  }
}
