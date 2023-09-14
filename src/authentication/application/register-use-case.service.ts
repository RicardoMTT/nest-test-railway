import { Inject, Injectable } from '@nestjs/common'; 
import { IUseCaseRegisterService } from './register-use-case.interface';
import { IRegisterRepository } from '../domain/repository/register.interface';
import { RegisterRepository } from '../domain/repository/register.repository';
import { RegisterUserDto } from '../infrastructure/dto/RegisterUserDto';
import { IResponse } from './login-use-case.interface';

@Injectable()
export class RegisterUseCaseService implements IUseCaseRegisterService {
    
    constructor(
        @Inject(RegisterRepository)
        private readonly registerRepository: IRegisterRepository,
    ) {

    }

    async register(body: RegisterUserDto): Promise<IResponse> {
        const response = await this.registerRepository.register(body);
        return response;
    }

 
}
