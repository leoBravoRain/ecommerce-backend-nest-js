import { Controller, Post, Body } from '@nestjs/common';

import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { baseRoutes } from 'src/config/baseRoutes';
import { routes } from './routes';

@Controller(baseRoutes.sales)
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  // create new sale
  @Post(routes.base)
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }
}
