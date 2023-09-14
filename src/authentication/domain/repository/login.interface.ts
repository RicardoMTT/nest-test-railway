import { ILoginRepositoryModelRequest } from "../models/login-repository.model";

export interface ILoginRepository {
	login(body:ILoginRepositoryModelRequest): Promise<any>;
}
