import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { Medico } from '../database/medico/medico.model'
import { Especialidade } from '../database/medico/especialidade.model'

@Injectable()
export class MedicosService {
    
    constructor(
        @InjectModel(Medico)
        private medicoModel: typeof Medico,
        @InjectModel(Especialidade)
        private especialidadeModel: typeof Especialidade
    ) {

    }

    async obterTodos(): Promise<Medico[]> {
        return await this.medicoModel.findAll({
            include: [ this.especialidadeModel ]
        }) 
    }
    
    async obterId(id: number): Promise<Medico> {
        return await this.medicoModel.findByPk(id, {
            include: [ this.especialidadeModel ]
        })
    }
    
    async obterNome(nome: string): Promise<Medico[]> {
        return await this.medicoModel.findAll({ where: { no_medico: { [Op.like]: `%${nome}%` } }, include: [ this.especialidadeModel ] });
        
    }

    async obterEndereco(endereco: number): Promise<Medico[]> {
        return await this.medicoModel.findAll({ where: { no_cep: endereco }, include: [ this.especialidadeModel ] });
        
    }

    async obterCRM(CRM: number): Promise<Medico[]> {
        return await this.medicoModel.findAll({ where: { no_crm: CRM }, include: [ this.especialidadeModel ] });
        
    }

    async obterTelefoneFix(TelefoneFix: number): Promise<Medico[]> {
        return await this.medicoModel.findAll({ where: { no_telefoneFix: TelefoneFix }, include: [ this.especialidadeModel ] });
        
    }

    async obterTelefoneCel(TelefoneCel: number): Promise<Medico[]> {
        return await this.medicoModel.findAll({ where: { no_telefoneCel: TelefoneCel }, include: [ this.especialidadeModel ] });
        
    }

    async obterEspecialidade(Especialidade: string): Promise<Medico[]> {
        return await this.medicoModel.findAll({
            include: { model: this.especialidadeModel,
                where: {
                    no_especialidade: Especialidade
                } 
            }
        }) 
        
    }

    async criar(medico: Medico) {
        const esse = await this.medicoModel.create(medico)
        medico.lista_especialidade.forEach(async esp => {
            esp['id_medico'] = esse.getDataValue("id")
            await this.especialidadeModel.create(esp)
        })
    }

    
    async alterar(medico: Medico): Promise<[number, Medico[]]> {

        const especialidade: Especialidade[] = await this.especialidadeModel.findAll({ where: { id_medico: medico.id } });
        especialidade.forEach(async esp => {
            await esp.destroy()
        })

        medico.lista_especialidade.forEach(async esp => {
            
            esp['id_medico'] = medico.id
            await this.especialidadeModel.create(esp)
    
        })

        return this.medicoModel.update(medico, {
            where: {
                id: medico.id
            }
        })
    }
    
    async apagar(id: number) {

        const especialidade: Especialidade[] = await this.especialidadeModel.findAll({ where: { id_medico: id } });
        especialidade.forEach(async esp => {
            await esp.destroy()
        })
        const medico: Medico = await this.obterId(id)
        if (medico != null) {
            await medico.destroy()
        }
    }
}