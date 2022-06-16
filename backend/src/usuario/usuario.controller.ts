import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario';

@Controller('usuario')
export class UsuarioController {
    constructor(
        @InjectRepository(Usuario) private repository: Repository < Usuario >
    ){}
    
    @Get()
    public async listaUsuarios(){
        return await this.repository.find()
    }

    @Post()
    public async criarUsuario(@Body()usuario:Usuario){
        return await this.repository.save(usuario)
    }
}