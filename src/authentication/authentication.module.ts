import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/commons/domain/entities/user.entity';
import { AuthController } from './infrastructure/authentication.controller';
import { LoginUseCaseService } from './application/login-use-case.service';
import { LoginRepository } from './domain/repository/login.repository';
import { OrmLoginRepository } from 'src/commons/domain/repository/orm-login.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RegisterUseCaseService } from './application/register-use-case.service';
import { RegisterRepository } from './domain/repository/register.repository';
import { OrmRegisterRepository } from 'src/commons/domain/repository/orm-register.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.registerAsync({
    imports: [],
    inject: [],
    useFactory: () => {
      return {
        secret: 'secreto',
        signOptions: {
          // expiresIn: '2h',
          expiresIn:'50s'
        },
      };
    },
  })
],
  controllers: [AuthController],
  providers: [
    OrmLoginRepository,
    OrmRegisterRepository,
    LoginUseCaseService,
    LoginRepository,
    RegisterUseCaseService,
    RegisterRepository
  ],
})
export class AuthenticationModule {}
