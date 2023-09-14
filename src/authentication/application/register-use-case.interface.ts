import { RegisterUserDto } from "../infrastructure/dto/RegisterUserDto";

export interface IUseCaseRegisterService {
	register(body:RegisterUserDto): Promise<any>;
}

export interface IResponse {
	id: string;
	email: number;
    name: string;
    token: string;
    active: boolean;
    createdOn:string;
}
