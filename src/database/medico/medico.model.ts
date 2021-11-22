import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript"
import { Especialidade } from "./especialidade.model"
import { IsNotEmpty, IsString, MaxLength, ArrayMinSize, IsArray, ValidateNested, IsNumberString } from 'class-validator'
import { Type } from 'class-transformer';

@Table
export class Medico extends Model<Medico> {

    @IsNotEmpty({
        message: 'no_medico(Nome do Médico) é obrigatório'
    })
    @IsString({
        message: 'no_medico(Nome do Médico) precisa ser uma string'
    })
    @MaxLength(120, {
      message: 'no_medico(Nome do Médico) pode ter no maximo 120 caracteres',
    })
    @Column({
        type: DataType.STRING(120),
        allowNull: false
    })
    no_medico: string

    @IsNotEmpty({
        message: 'no_crm(CRM) é obrigatório'
    })
    @IsString({
        message: 'no_crm(CRM) precisa ser uma string'
    })
    @MaxLength(7, {
      message: 'no_crm(CRM) pode ter no maximo 7 caracteres',
    })
    @IsNumberString({
        no_symbols: true
    },{
        message: 'no_crm(CRM) pode conter apenas números',
    })
    @Column({
        type: DataType.STRING(7),
        allowNull: false
    })
    no_crm: string


    @IsString({
        message: 'no_telefoneFix(Telefone Fixo) precisa ser uma string'
    })
    @IsNumberString({
        no_symbols: true
    },{
        message: 'no_telefoneFix(Telefone Fixo) pode conter apenas números',
    })
    @Column({
        type: DataType.STRING()
    })
    no_telefoneFix: string

    @IsString({
        message: 'no_telefoneCel(Telefone Celular) precisa ser uma string'
    })
    @IsNumberString({
        no_symbols: true
    },{
        message: 'no_telefoneCel(Telefone Celular) pode conter apenas números',
    })
    @Column({
        type: DataType.STRING()
    })
    no_telefoneCel: string


    @IsString({
        message: 'no_cep(CEP) precisa ser uma string'
    })
    @IsNotEmpty({
        message: 'no_cep(CEP) é obrigatório'
    })
    @Column({
        type: DataType.INTEGER(),
        allowNull: false
    })
    no_cep: string


    @IsNotEmpty({
        message: 'lista_especialidade é obrigatório'
    })
    @IsArray({
        message: "lista_especialidade precisa ser um array"
    })
    @ValidateNested(
        { 
            each: true,
            message: "lista_especialidade precisa ser um array de objetos"
        }
    )
    @ArrayMinSize(2, {
        message: 'lista_especialidade precisa ter no minimo 2 especialidades'
    })
    @Type(() => Especialidade)
    @HasMany(() => Especialidade)
    lista_especialidade: Especialidade[]
}