import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart.controller';
import { CartService } from './services';
import { OrderModule } from '../order/order.module';
import { DatabaseModule } from '../database/database.module';
import { Cart } from '../database/entities/cart.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Cart]), DatabaseModule, OrderModule ],
  providers: [ CartService ],
  controllers: [ CartController ]
})

export class CartModule {}
