import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carts } from '../../database/entities/carts.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Carts)
    private readonly cartsRepository: Repository<Carts>,
  ) {}

  async findAll() {
    try {
      const carts = await this.cartsRepository.find();
      return carts;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async findOne(id: string) {
    try {
      const cart = await this.cartsRepository.findOneBy({ id });
      return cart;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  // async findAllProductsForCart(id: string) {
  //   return this.cartsRepository.findOne(
  //     { id },
  //     {
  //       relations: ['products'],
  //     },
  //   );
  // }

  // async create(createCartsDto: CreateCartsDto) {
  //   try {
  //     await this.CartsRepository.insert(createCartsDto);
  //   } catch (e) {
  //     return false;
  //   }
  //   return true;
  // }

  // async update(id: string, updateCartsDto: UpdateCartsDto) {
  //   try {
  //     await this.cartsRepository.update({ id }, updateCartsDto);
  //   } catch (e) {
  //     return false;
  //   }
  //   return true;
  // }

  // async remove(id: string) {
  //   try {
  //     await this.cartsRepository.delete({ id });
  //   } catch (e) {
  //     return false;
  //   }
  //   return true;
  // }
}
