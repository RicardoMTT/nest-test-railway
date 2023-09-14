import { LoginUserDto } from "../infrastructure/dto/LoginUserDto";

export interface IUseCaseLoginService {
	login(body:LoginUserDto): Promise<any>;
}

export interface IResponse {
	id: string;
	email: number;
    token: string;
}
