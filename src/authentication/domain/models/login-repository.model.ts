export interface ILoginRepositoryModel{
    id:string;
    email:string;
    token:string;
    name:string;
}

export interface ILoginRepositoryModelRequest{
    email:string;
    password:string;
}