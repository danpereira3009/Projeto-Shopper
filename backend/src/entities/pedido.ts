import { Entity, Timestamp, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ItemPedido } from './item_pedido';
@Entity()
export class Pedido { 
    @PrimaryGeneratedColumn() id: number
    @Column() nome_cliente: string
    @Column() valor_total: number
    @Column("timestamp") data_entrega: Timestamp
    @OneToMany(() => ItemPedido, (itemPedido) => itemPedido.pedido, { 
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }) itens_pedido: ItemPedido[]
} 