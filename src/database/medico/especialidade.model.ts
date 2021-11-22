import { Table, Model, Column, ForeignKey, DataType } from "sequelize-typescript"
import { Medico } from "./medico.model"
import { IsNotEmpty, IsString } from 'class-validator'

@Table
export class Especialidade extends Model<Especialidade> {

    @IsNotEmpty({
        message: 'no_especialidade(Nome da Especialidade) é obrigatório'
    })
    @IsString({
        message: 'no_especialidade(Nome da Especialidade) precisa ser uma string'
    })
    @Column({
        type: DataType.STRING(120),
        allowNull: false
    })
    no_especialidade: string

    @ForeignKey(() => Medico)
    @Column
    id_medico: number

}