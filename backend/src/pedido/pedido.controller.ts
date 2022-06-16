import { Pedido } from './../entities/pedido';
import { Controller, Post, Get, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('pedido')
export class PedidoController {
    constructor(
        @InjectRepository(Pedido) private pedidoRepository: Repository < Pedido >
    ){}

    @Post()
    public async criarPedido(@Body() pedido: Pedido) {
        return await this.pedidoRepository.save(pedido)
    }

    @Get()
    public async listarPedido(){
        return await this.pedidoRepository.find({ relations:['itens_pedido', 'itens_pedido.produto'] })
    }

    @Get(':id')
    public async buscarPedido(@Param('id') id: number){
        return await this.pedidoRepository.findOne({id:id}, {relations: ['itens_pedido', 'itens_pedido.produto']})
    }

    @Put(':id')
    public async alterarPedido(@Param('id') id:number, @Body() pedido: Pedido){
        return await this.pedidoRepository.update(id,pedido)
    }

    @Delete(':id')
    public async deletarPedido(@Param('id') id:number){
        return await this.pedidoRepository.delete(id)
    }
}
