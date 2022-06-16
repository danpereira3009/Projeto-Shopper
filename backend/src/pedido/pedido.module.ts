import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from '../entities/pedido';
import { Produto } from 'src/entities/produto';

@Module({
    controllers: [PedidoController], 
    imports: [TypeOrmModule.forFeature([Pedido, Produto])], 
    exports: [TypeOrmModule]
})
export class PedidoModule {}
