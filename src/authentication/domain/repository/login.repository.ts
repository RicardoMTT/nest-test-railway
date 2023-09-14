import { Inject, Injectable } from '@nestjs/common';
import { ILoginRepository } from './login.interface';
import { IOrmLoginRepository } from 'src/commons/domain/repository/orm-login.repository.interface';
import { OrmLoginRepository } from 'src/commons/domain/repository/orm-login.repository';
import { ILoginRepositoryModel, ILoginRepositoryModelRequest } from '../models/login-repository.model';

@Injectable()
export class LoginRepository implements ILoginRepository {

    constructor(
        @Inject(OrmLoginRepository) private readonly ormLoginRepository: IOrmLoginRepository
    ) {
        
    }

    async login(body: ILoginRepositoryModelRequest): Promise<ILoginRepositoryModel> {
        const response = await this.ormLoginRepository.login(body);
        console.log('response 2', response);
        
        return response;
    }

}