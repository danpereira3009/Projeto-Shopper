import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemPedido } from 'src/entities/item_pedido';
import { Repository } from 'typeorm';

@Controller('item-pedido')
export class ItemPedidoController {

    constructor( 
        @InjectRepository(ItemPedido)
        private repository: Repository<ItemPedido>
    ) {}

    @Post()
    public async createItemPedido(@Body() itemPedido: ItemPedido) {
        return await this.repository.save(itemPedido)
    }
}
