import { Injectable } from '@angular/core';
import { Cpu } from '../model/cpu.model';
import { Gpu } from '../model/gpu.model';
import { Motherboard } from '../model/motherboard.model';
import { Product } from '../model/product.model';
import { Ram } from '../model/ram.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private id= "PD-";
  private count = 10;
  private products: (Cpu | Gpu |  Motherboard | Ram | Product)[] = [
    {
      id: "PD-1",
      merek: "AMD",
      model:"Ryzen 3 3300X",
      description: "Best Budget Gaming Motherboard CPU Combo",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71qJkCH4EnL._AC_SL1384_.jpg",
      price: 2499000,
      stok: 0,
      type: "Processor",
      baseClock: 3.8,
      boostClock: 4.3 ,
      core: 4,
      thread: 8
    },
    {
      id: "PD-2",
      merek: "Intel",
      model:"Core i5-10600K",
      description: "Best Motherboard CPU Combo for Gaming	",
      imageUrl: "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/17/347000/347000_fe723839-9bea-467d-943a-9c6f5f1a1814_640_640",
      price: 4100000,
      stok:100,
      type: "Processor",
      baseClock: 4.1,
      boostClock: 4.8 ,
      core: 6,
      thread: 12
    },
    {
      id: "PD-3",
      merek: "MSI",
      model:"B450 Tomahawk",
      description: "Best Budget Gaming Motherboard CPU Combo",
      imageUrl: "https://cf.shopee.co.id/file/a38847257ae5dbe6964c8ad176b27767",
      price: 1999000,
      stok:213123,
      type: "Motherboard",
      chipset: "AMD B450",
      tipeProcessor:"AMD",
    },
    {
      id: "PD-4",
      merek: "MSI",
      model:"MAG Z490 Tomahawk",
      description: "Best Motherboard CPU Combo for Gaming",
      imageUrl: "https://storage-asset.msi.com/global/picture/features/MB/Tomahawk/Z490/z490-tomahawk-board02.png",
      price: 3999000,
      stok: 20,
      type: "Motherboard",
      chipset: "Intel Z490",
      tipeProcessor:"Intel",
    },
    {
      id: "PD-5",
      merek: "Gigabyte",
      model:"X570 I Aorus Pro",
      description: "Best Mini-ITX board for Ryzen CPUs",
      imageUrl: "https://cdn.levvvel.com/wp-content/uploads/gigabyte-aorus-x570-i-pro-wi-fi-motherboard.jpg",
      price: 6795000,
      stok:2,
      type: "Motherboard",
      chipset: "AMD X570",
      tipeProcessor:"AMD",

    },
    {
      id: "PD-6",
      merek: "Corsair",
      model:"Vengeance LED",
      description: "Best RAM",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/SWkrDZbyjj7EsW8mBLhpHT-650-80.jpg",
      price: 3100000,
      stok:4,
      type: "RAM",
      speed: 3200,
      ukuran: 16
    },
    {
      id: "PD-7",
      merek: "G.Skill ",
      model:"Trident Z RGB",
      description: "Best DDR4 RAM",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/Vqoha9GFY6krezcWbon7oa-650-80.jpg",
      price: 1828000,
      stok:4,
      type: "RAM",
      speed: 3200,
      ukuran: 16
    },
    {
      id: "PD-8",
      merek: "Kingston ",
      model:"HyperX Predator",
      description: "Best DDR3 RAM",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/Gjnwh5NDUiqkL6RM6EXt2R-650-80.jpg",
      price: 409000,
      stok:4,
      type: "RAM",
      speed: 1600,
      ukuran: 8
    },
    {
      id: "PD-9",
      merek: "Nvidia ",
      model:"GeForce RTX 2070 Super",
      description: "The best QHD graphics card",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/EnKTWqEHGGmNADQMerqDk5-650-80.jpg",
      price: 7990000,
      stok: 123,
      type: "GPU"
    },
    {
      id: "PD-10",
      merek: "AMD ",
      model:"Radeon RX 5600 XT",
      description: "Nvidia better watch out",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/9xQ9U2RmVT3xNusoHua7kD-650-80.jpg",
      price: 4442000,
      stok:6,
      type: "GPU"
    },
  ];
  constructor() { }

  getAllProducts(){
    return this.products;
  }

  addProduct(prod: (Cpu | Gpu |  Motherboard | Ram | Product)){
    this.count++;
    prod.id = this.id + this.count;
    this.products.push(prod);
    return 1;
  }

  deleteProduct(productId: string){
    return this.products = this.products.filter(obj => obj.id !== productId);
  }

  deleteProducts(productIds){
    return this.products = this.products.filter(obj => !productIds.includes(obj.id));
  }

  editProduct(prod: (Cpu | Gpu |  Motherboard | Ram | Product)){
    return this.products.find(product => {
      if(product.id === prod.id){
        product = prod;
      }
    });
  }

  getProduct(productId: string){
    return this.products.find(product => {
      return product.id === productId;
    });
  }
}
