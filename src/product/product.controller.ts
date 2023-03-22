import { Controller, Get, Param } from '@nestjs/common';

import { ProductService } from './product.service';
import { baseRoutes } from 'src/config/baseRoutes';
import { routes } from './routes';

@Controller(baseRoutes.products)
export class ProductController {
  constructor(private productService: ProductService) {}
  // return list of products
  @Get(routes.base)
  async getProducts() {
    return { products: await this.productService.getProducts() };
  }

  // return product details based on product id
  @Get(routes.getProductById)
  async getProductById(@Param('id') productId: string) {
    return { product: await this.productService.getProductById(productId) };
  }
}
