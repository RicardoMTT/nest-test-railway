export interface IOrderDetailRepositoryModel{
    id:number;

    product_id:number;
    
    quantity:number;
    
    order_id:number;
    
    client_id:number;

    shipping_details:string;
}