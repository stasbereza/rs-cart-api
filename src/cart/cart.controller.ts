import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { CartService } from './services';

@Controller('api/profile/cart')
export class CartController {
  constructor(
    private cartService: CartService,
  ) { }

  @Get()
  async findAll() {
    const carts = await this.cartService.findAll();

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: { carts },
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cart = await this.cartService.findOne(id);
      
    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: { cart },
    }
  }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  // @Get()
  // findUserCart(@Req() req: AppRequest) {
  //   const cart = this.cartService.findOrCreateByUserId(getUserIdFromRequest(req));

  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'OK',
  //     data: { cart, total: calculateCartTotal(cart) },
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  // @Put()
  // updateUserCart(@Req() req: AppRequest, @Body() body) { // TODO: validate body payload...
  //   const cart = this.cartService.updateByUserId(getUserIdFromRequest(req), body)

  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'OK',
  //     data: {
  //       cart,
  //       total: calculateCartTotal(cart),
  //     }
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  // @Delete()
  // clearUserCart(@Req() req: AppRequest) {
  //   this.cartService.removeByUserId(getUserIdFromRequest(req));

  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'OK',
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  // @Post('checkout')
  // checkout(@Req() req: AppRequest, @Body() body) {
  //   const userId = getUserIdFromRequest(req);
  //   const cart = this.cartService.findByUserId(userId);

  //   if (!(cart && cart.items.length)) {
  //     const statusCode = HttpStatus.BAD_REQUEST;
  //     req.statusCode = statusCode

  //     return {
  //       statusCode,
  //       message: 'Cart is empty',
  //     }
  //   }

  //   const { id: cartId, items } = cart;
  //   const total = calculateCartTotal(cart);
  //   const order = this.orderService.create({
  //     ...body, // TODO: validate and pick only necessary data
  //     userId,
  //     cartId,
  //     items,
  //     total,
  //   });
  //   this.cartService.removeByUserId(userId);

  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'OK',
  //     data: { order }
  //   }
  // }
}
