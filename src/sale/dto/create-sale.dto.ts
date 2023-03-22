import { Sale } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

import { CreateClientDto } from 'src/client/dto';

export class CreateSaleDto {
  @IsNotEmpty()
  client: CreateClientDto;

  // array of products [{productId, quantity}]
  @IsNotEmpty()
  products: Sale['products'];
}
