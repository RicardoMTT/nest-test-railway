import { IResponse } from "src/authentication/application/register-use-case.interface";
import { RegisterUserDto } from "src/authentication/infrastructure/dto/RegisterUserDto";

export interface IRegisterRepository {
	register(body:RegisterUserDto): Promise<IResponse>;
}
