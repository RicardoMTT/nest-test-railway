import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  async registerUser(registerUserDto: RegisterUserDto) {
    try {
      const { password, ...userData } = registerUserDto;
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });

      await this.userRepository.save(user);
      delete user.password;
      return {
        ...user,
        token: this.getJwtToken({ id: user.id }),
      };
    } catch (error) {
      console.log('error', error);
    }
  }

  private getJwtToken(payload: any) {
    const token = this.jwtService.sign(payload); // Generacion del token (JWT)
    return token;
  }
}
