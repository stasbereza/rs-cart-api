import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class CartItems {
  @PrimaryColumn({ type: 'uuid' })
  cartId: string;

  @Column({ type: 'uuid'  })
  productId: string;

  @Column({ type: 'integer' })
  count: number;
}