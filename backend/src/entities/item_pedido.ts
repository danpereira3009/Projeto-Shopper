import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from './pedido';
import { Produto } from './produto';

@Entity()
export class ItemPedido {
    @PrimaryGeneratedColumn() id: number
    @Column() qty: number
    @ManyToOne(() => Produto, (produto) => produto.itens_pedido, { 
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }) produto: Produto
    @ManyToOne(() => Pedido, (pedido) => pedido.itens_pedido) pedido: Pedido
}