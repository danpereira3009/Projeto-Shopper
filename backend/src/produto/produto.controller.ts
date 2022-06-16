import { Controller, Post, Inject, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from '../entities/produto';
import { Repository } from 'typeorm';

@Controller('produto')
export class ProdutoController {
    constructor(
        @InjectRepository(Produto) private repository: Repository < Produto >
    ){}

    @Post()
    public async criarProduto(@Body() produto: Produto) {
        return await this.repository.save(produto)
    }
    @Get()
    public async listarProduto(){
        return await this.repository.find({relations:['itens_pedido', 'itens_pedido.pedido']})
    }
    @Get(':id')
    public async buscarProduto(@Param('id') id: number){
        return await this.repository.findOne({id:id}, {relations: ['itens_pedido', 'itens_pedido.pedido']})
    }
    @Put(':id')
    public async alterarProduto(@Param('id') id:number, @Body() produto: Produto){
        return await this.repository.update(id,produto)
    }
    @Delete(':id')
    public async deletarProduto(@Param('id') id:number){
        return await this.repository.delete(id)
    }
}
