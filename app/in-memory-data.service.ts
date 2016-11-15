import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      {
          id: 1, 
          title: 'Dell - Inspiron 15.6',
          description: 'Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 1TB Hard Drive - Black',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5579/5579395_sd.jpg;maxHeight=145;maxWidth=222',
          price: 700
        },
      {
          id: 2, 
          title: 'Lenovo - 310-15IKB 15.6',
          description: 'Laptop - Intel Core i5 - 8GB Memory - 1TB Hard Drive - Textured ebony black',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5643/5643500_sd.jpg;maxHeight=145;maxWidth=222',
          price: 450
        },
      {
          id: 3, 
          title: 'HP - 15.6',
          description: 'Laptop - AMD A6-Series - 4GB Memory - 500GB Hard Drive - Black',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5606/5606300_sd.jpg;maxHeight=145;maxWidth=222',
          price: 500
        },
      {
          id: 4, 
          title: 'HP - 15.6',
          description: 'Laptop - AMD A6-Series - 4GB Memory - 500GB Hard Drive - Black',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5606/5606300_sd.jpg;maxHeight=145;maxWidth=222',
          price: 800
        },
      {
          id: 5, 
          title: 'HP - 15.6',
          description: 'Laptop - AMD A6-Series - 4GB Memory - 500GB Hard Drive - Black',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5606/5606300_sd.jpg;maxHeight=145;maxWidth=222',
          price: 900
        },
      {
          id: 6, 
          title: 'HP - 15.6',
          description: 'Laptop - AMD A6-Series - 4GB Memory - 500GB Hard Drive - Black',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5606/5606300_sd.jpg;maxHeight=145;maxWidth=222',
          price: 150
        },
      {
          id: 7, 
          title: 'HP - Pavilion x360 2-in-1 13.3',
          description: 'Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 128GB Solid State Drive - Gold',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5618/5618119_sd.jpg;maxHeight=145;maxWidth=222',
          price: 500
        },
      {
          id: 8, 
          title: 'Lenovo - 100S-14IBR 14',
          description: 'Laptop - Intel Celeron - 2GB Memory - 32GB eMMC Flash Memory - Blue',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5580/5580020_sd.jpg;maxHeight=145;maxWidth=222',
          price: 600
        },
      {
          id: 9, 
          title: 'Lenovo - Ideapad 110s 11.6',
          description: 'Laptop - Intel Celeron - 2GB Memory - 32GB eMMC Flash Memory - White',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5580/5580020_sd.jpg;maxHeight=145;maxWidth=222',
          price: 580
        },
      {
          id: 10, 
          title: 'Microsoft - Surface Pro 4 - 12.3',
          description: '128GB - Intel Core m3 - Bundle with Keyboard - Silver',
          image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5624/5624784_sd.jpg;maxHeight=145;maxWidth=222',
          price: 1150
        }
    ];
    return {products};
  }
}
