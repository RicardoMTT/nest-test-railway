import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IUseCaseLoginService } from '../application/login-use-case.interface';
import { LoginUseCaseService } from '../application/login-use-case.service';
import { IUseCaseRegisterService } from '../application/register-use-case.interface';
import { RegisterUseCaseService } from '../application/register-use-case.service';
import { LoginUserDto } from './dto/LoginUserDto';
import { RegisterUserDto } from './dto/RegisterUserDto';

@Controller('auth')
export class AuthController {

  constructor(
    @Inject(LoginUseCaseService)  private readonly _loginService: IUseCaseLoginService,
    @Inject(RegisterUseCaseService)  private readonly _registerService: IUseCaseRegisterService
  ) {}

  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this._loginService.login(loginUserDto);
  }

  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this._registerService.register(registerUserDto);
  }
}
