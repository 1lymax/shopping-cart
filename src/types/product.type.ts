export interface IProduct {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
}

export interface IProductState {
    products: IProduct[]
}