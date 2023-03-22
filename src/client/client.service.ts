import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  // create a new client
  async create(createClientDto: CreateClientDto) {
    const client = await this.prisma.client.create({ data: createClientDto });
    return client;
  }
}
