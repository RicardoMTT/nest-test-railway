

export interface IGetRegisterRepositoryDto{
    id:number;
    email:string;
    name:string;
    token:string;
    active:boolean;
    createdOn:string;
}

export interface IGetRegisterRepositoryRequestDto{
    email:string;
    name:string;
    password:string;
}