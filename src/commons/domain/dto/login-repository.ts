

export interface IGetLoginRepositoryDto{
    id:string;
    email:string;
    token:string;
    name:string;
}

export interface IGetLoginRepositoryRequestDto{
    email:string;
    password:string;
}