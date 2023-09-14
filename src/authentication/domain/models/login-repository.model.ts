export interface ILoginRepositoryModel{
    id:string;
    email:string;
    token:string;
}

export interface ILoginRepositoryModelRequest{
    email:string;
    password:string;
}