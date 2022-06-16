import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ItemPedido } from './item_pedido';
@Entity()

export class Produto {
    @PrimaryGeneratedColumn() id: number
    @Column({unique: true}) name: string
    @Column() price: number
    @Column() qty_stock: number
    @OneToMany(() => ItemPedido, (itemPedido) => itemPedido.produto)
    @JoinTable({name: "produtos_pedido"}) 
    itens_pedido: ItemPedido []
}