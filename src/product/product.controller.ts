import { Controller, Get } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  // return list of products
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
}
