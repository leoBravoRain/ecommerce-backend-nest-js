import { Injectable } from '@nestjs/common';

import { CreateSaleDto } from './dto/create-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}

  // create new sale with client associated
  async create(createSaleDto: CreateSaleDto) {
    const saleInstance = await this.prisma.sale.create({
      data: {
        // create client
        client: {
          create: createSaleDto.client,
        },

        // link products
        products: createSaleDto.products,
      },
    });

    return saleInstance.id;
  }
}
