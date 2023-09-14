import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IOrmLoginRepository } from './orm-login.repository.interface';
import { IGetLoginRepositoryDto, IGetLoginRepositoryRequestDto } from '../dto/login-repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class OrmLoginRepository
  extends Repository<UserEntity>
  implements IOrmLoginRepository
{
  constructor(dataSource: DataSource, private readonly jwtService: JwtService) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async login(loginUserDto: IGetLoginRepositoryRequestDto): Promise<IGetLoginRepositoryDto> {
    try {
      const { email, password } = loginUserDto;

      const user = await this.findOne({
        where: {
          email,
        },
        select: {
          email: true,
          id: true,
          password: true,
        },
      });

      if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedException('Invalid credentials');
      }

      delete user.password;

      return {
        token: this.getJwtToken({ id: user.id }),
        id: user.id,
        email: user.email,
      };
    } catch (error) {
      throw new UnauthorizedException('Credentials are not valid');
    }
  }

  private getJwtToken(payload: any) {
    const token = this.jwtService.sign(payload, {
      secret: 'secreto',
    }); // Generacion del token (JWT)
    return token;
  }
}
