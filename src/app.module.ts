import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicosController } from './medico/medico.controllers';
import { Medico } from './database/medico/medico.model'
import { Especialidade } from './database/medico/especialidade.model'
import { MedicosService } from './medico/medico.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USER_BANCO,
      password: process.env.SENHA_BANCO,
      database: 'hospital',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Medico]),
    SequelizeModule.forFeature([Especialidade]),
  ],
  controllers: [MedicosController],
  providers: [MedicosService],
})
export class AppModule {}
