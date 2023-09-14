import { Inject, Injectable } from '@nestjs/common'; 
import { IUseCaseLoginService } from './login-use-case.interface';
import { ILoginRepository } from '../domain/repository/login.interface';
import { LoginRepository } from '../domain/repository/login.repository';
import { LoginUserDto } from '../infrastructure/dto/LoginUserDto';
import { LoginResponseDto } from '../infrastructure/dto/LoginResponseDto';

@Injectable()
export class LoginUseCaseService implements IUseCaseLoginService {
    
    constructor(
        @Inject(LoginRepository)
        private readonly loginRepository: ILoginRepository,
    ) {

    }

    async login(body: LoginUserDto): Promise<LoginResponseDto> {
        const response = await this.loginRepository.login(body);        
        return response;
    }
 
}
