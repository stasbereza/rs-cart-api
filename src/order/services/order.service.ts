import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../database/entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>
  ) {}

  async findAll() {
    try {
      const orders = await this.ordersRepository.find();
      return orders;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async findOne(id: string) {
    try {
      const order = await this.ordersRepository.findOneBy({ id });
      return order;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  // create(data: any) {
  //   const order = {
  //     ...data,
  //     id,
  //     status: 'inProgress',
  //   };

  //   this.orders[ id ] = order;

  //   return order;
  // }

  // update(orderId, data) {
  //   const order = this.findById(orderId);

  //   if (!order) {
  //     throw new Error('Order does not exist.');
  //   }

  //   this.orders[ orderId ] = {
  //     ...data,
  //     id: orderId,
  //   }
  // }
}
