import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IOrmRegisterRepository } from './orm-register.repository.interface';
import { IGetRegisterRepositoryDto, IGetRegisterRepositoryRequestDto } from '../dto/register-repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class OrmRegisterRepository
  extends Repository<UserEntity>
  implements IOrmRegisterRepository
{
  constructor(dataSource: DataSource, private readonly jwtService: JwtService) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async register(registerUserDto: IGetRegisterRepositoryRequestDto): Promise<IGetRegisterRepositoryDto> {
    try {
      const { password, name,email } = registerUserDto;
      const registerJson = {
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 10),
      };

      const user = this.create(registerJson);

      await this.save(user);
      delete user.password;
      
      return {
        token: this.getJwtToken({ id: user.id }),
        id: Number(user.id),
        active: user.active,
        email: user.email,
        createdOn: user.createdOn as any,
        name: user.name,
      };
    } catch (error) {
      console.log('error', error);
    }
  }

  private getJwtToken(payload: any) {
    const token = this.jwtService.sign(payload, {
      secret: 'secreto',
    }); // Generacion del token (JWT)
    return token;
  }
}
