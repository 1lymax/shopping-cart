export interface Product {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
}

export interface ProductState {
    products: Product[]
}