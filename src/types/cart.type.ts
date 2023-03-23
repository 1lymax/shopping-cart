
export interface ICartUnit {
    id: number;
    title: string;
    price: number;
    quantity: number
}

export interface ICartState {
    items: ICartUnit[]
    totalItems: number,
    totalPrice: number,
    cartVisible: boolean,
    dragActive: boolean
}