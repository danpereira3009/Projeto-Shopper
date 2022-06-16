import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
// Isso é uma tabela do banco de dados
@Entity() //notação
export class Usuario {
    @PrimaryGeneratedColumn() id: number
    @Column({unique: true}) login: string
    @Column() nome: string
    @Column() senha: number
}

