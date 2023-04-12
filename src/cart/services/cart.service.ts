import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../../database/entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  async findAll() {
    try {
      const carts = await this.cartRepository.find();
      return carts;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async findOne(id: string) {
    try {
      const cart = await this.cartRepository.findOneBy({ id });
      return cart;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  // async findAllProductsForCart(id: string) {
  //   return this.cartRepository.findOne(
  //     { id },
  //     {
  //       relations: ['products'],
  //     },
  //   );
  // }

  // async create(createCartsDto: CreateCartsDto) {
  //   try {
  //     await this.cartRepository.insert(createCartsDto);
  //   } catch (e) {
  //     return false;
  //   }
  //   return true;
  // }

  // async update(id: string, updateCartsDto: UpdateCartsDto) {
  //   try {
  //     await this.cartRepository.update({ id }, updateCartsDto);
  //   } catch (e) {
  //     return false;
  //   }
  //   return true;
  // }

  // async remove(id: string) {
  //   try {
  //     await this.cartRepository.delete({ id });
  //   } catch (e) {
  //     return false;
  //   }
  //   return true;
  // }
}
