import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './services';
import { OrderModule } from '../order/order.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [ DatabaseModule, OrderModule ],
  providers: [ CartService ],
  controllers: [ CartController ]
})

export class CartModule {}
