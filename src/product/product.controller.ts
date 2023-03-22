import { Controller, Get, Param } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  // return list of products
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  // return product details based on product id
  @Get('/:id')
  getProductById(@Param('id') productId: string) {
    return this.productService.getProductById(productId);
  }
}
