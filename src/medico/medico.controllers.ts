import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Medico } from '../database/medico/medico.model'
import { MedicosService } from "./medico.service";

@Controller('medicos')
export class MedicosController {

    constructor(private medicosService: MedicosService) {}
    
    @Get()
    async obterTodos(): Promise<Medico[]> {
        return this.medicosService.obterTodos()
    }
    
    @Get(':id')
    async obterId(@Param() params): Promise<Medico> {
        return this.medicosService.obterId(params.id)
    }
    
    @Get('/nome/:no_medico')
    async obterNome(@Param() params): Promise<Medico[]> {
        return this.medicosService.obterNome(params.no_medico)
    }
    
    @Get('/endereco/:no_cep')
    async obterEndereco(@Param() params): Promise<Medico[]> {
        return this.medicosService.obterEndereco(params.no_cep)
    }
    
    @Get('/CRM/:no_crm')
    async obterCRM(@Param() params): Promise<Medico[]> {
        return this.medicosService.obterCRM(params.no_crm)
    }
    
    @Get('/telFix/:no_telefoneFix')
    async obterTelefoneFix(@Param() params): Promise<Medico[]> {
        return this.medicosService.obterTelefoneFix(params.no_telefoneFix)
    }
    
    @Get('/telCel/:no_telefoneCel')
    async obterTelefoneCel(@Param() params): Promise<Medico[]> {
        return this.medicosService.obterTelefoneCel(params.no_telefoneCel)
    }
    
    @Get('/especialidade/:no_especialidade')
    async obterEspecialidade(@Param() params): Promise<Medico[]> {
        return this.medicosService.obterEspecialidade(params.no_especialidade)
    }
    
    @Post()
    criar(@Body() medico: Medico) {
        return this.medicosService.criar(medico)
    }
    
    @Put()
    async alterar(@Body() medico: Medico): Promise<[number, Medico[]]> {
        return this.medicosService.alterar(medico)
    }
    
    @Delete(':id')
    async apagar(@Param() params) {
        return this.medicosService.apagar(params.id)
    }
}