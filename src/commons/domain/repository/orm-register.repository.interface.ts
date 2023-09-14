
import { IGetRegisterRepositoryDto, IGetRegisterRepositoryRequestDto } from "../dto/register-repository";

export interface IOrmRegisterRepository {
	register(body:IGetRegisterRepositoryRequestDto): Promise<IGetRegisterRepositoryDto>;
}
