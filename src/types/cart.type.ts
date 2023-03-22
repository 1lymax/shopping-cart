
export interface CartUnit {
    id: number;
    title: string;
    price: number;
    quantity: number
}

export interface CartState {
    items: CartUnit[]
    totalItems: number,
    totalPrice: number,
    cartVisible: boolean,
    dragActive: boolean
}