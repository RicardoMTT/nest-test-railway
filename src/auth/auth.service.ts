import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { TokenDto } from './dto/token.dto';
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


  async loginUser(loginUserDto: LoginUserDto) {
    try {
      const { email,password } = loginUserDto;

      const user = await this.userRepository.findOne({
        where:{
          email
        },
        select:{
          email:true,
          id:true,
          password:true
        }
      });
      
      if (!user) {
        throw new UnauthorizedException('Credentials are not valid');
      }

      //comparar una cadena sin cifrar con un hash que fue cifrado      
      if (!bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedException('Credentials are not valid');
      }
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
    const token = this.jwtService.sign(payload,{
      secret:'secreto'
    }); // Generacion del token (JWT)
    return token;
  }


  async refresh(dto:TokenDto):Promise<any> {
    const usuario = await this.jwtService.decode(dto.token);//obtener la data a partir del token
    const payload  = {
      id:usuario['id']
    }
    const token = await this.jwtService.sign(payload);
    return {token}
  }
}
