import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from '../entities/produto';

@Module({
  controllers: [ProdutoController], 
  imports: [TypeOrmModule.forFeature([Produto])], //typeOrmModule banco de dados
  exports: [TypeOrmModule]
})
export class ProdutoModule {}