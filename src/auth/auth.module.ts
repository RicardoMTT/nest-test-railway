import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
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
  }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
