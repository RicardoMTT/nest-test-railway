
import { IGetLoginRepositoryDto, IGetLoginRepositoryRequestDto } from "../dto/login-repository";

export interface IOrmLoginRepository {
	login(body:IGetLoginRepositoryRequestDto): Promise<IGetLoginRepositoryDto>;

}
