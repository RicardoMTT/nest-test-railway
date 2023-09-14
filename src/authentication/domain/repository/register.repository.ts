import { Inject, Injectable } from '@nestjs/common';
import { IRegisterRepository } from './register.interface';
import { IOrmRegisterRepository } from 'src/commons/domain/repository/orm-register.repository.interface';
import { OrmRegisterRepository } from 'src/commons/domain/repository/orm-register.repository';

@Injectable()
export class RegisterRepository implements IRegisterRepository {

  constructor(
    @Inject(OrmRegisterRepository) private readonly ormRegisterRepository: IOrmRegisterRepository
  ) {}

  async register(body: any): Promise<any> {
    const response = await this.ormRegisterRepository.register(body);
    return response;
  }
}
