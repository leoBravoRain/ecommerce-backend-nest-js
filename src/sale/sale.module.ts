import { Module } from '@nestjs/common';

import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { ClientModule } from 'src/client/client.module';

@Module({
  controllers: [SaleController],
  providers: [SaleService],
  imports: [ClientModule],
})
export class SaleModule {}
