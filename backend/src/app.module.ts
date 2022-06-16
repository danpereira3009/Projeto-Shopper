import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Usuario } from './entities/usuario';
import { UsuarioController } from './usuario/usuario.controller';
import { ProdutoModule } from './produto/produto.module';
import { Produto } from './entities/produto';
import { ItemPedido } from './entities/item_pedido';
import { Pedido } from './entities/pedido';
import { PedidoController } from './pedido/pedido.controller';
import { PedidoModule } from './pedido/pedido.module';
import { ItemPedidoModule } from './item_pedido/item_pedido.module';

//Configuração do Banco de Dados
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'vertrigo',
    database: 'ecommerce',
    synchronize: true,
    entities: [Usuario, Produto, ItemPedido, Pedido]
  }),
    TypeOrmModule.forFeature([Usuario]),
    ProdutoModule,
    PedidoModule,
    ItemPedidoModule
],
  controllers: [AppController, UsuarioController],
  providers: [AppService],
  exports: [TypeOrmModule]
})
export class AppModule {}
