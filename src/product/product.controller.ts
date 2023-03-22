import { Controller, Get, Param } from '@nestjs/common';

import { ProductService } from './product.service';
import { baseRoutes } from 'src/config/baseRoutes';
import { routes } from './routes';

@Controller(baseRoutes.products)
export class ProductController {
  constructor(private productService: ProductService) {}
  // return list of products
  @Get(routes.base)
  getProducts() {
    return this.productService.getProducts();
  }

  // return product details based on product id
  @Get(routes.getProductById)
  getProductById(@Param('id') productId: string) {
    return this.productService.getProductById(productId);
  }
}
