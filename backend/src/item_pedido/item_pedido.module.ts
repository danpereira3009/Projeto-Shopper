import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPedido } from 'src/entities/item_pedido';
import { ItemPedidoController } from './item_pedido.controller';

@Module({
  controllers: [ItemPedidoController],
  imports: [TypeOrmModule.forFeature([ItemPedido])],
  exports: [TypeOrmModule]
})
export class ItemPedidoModule {}
