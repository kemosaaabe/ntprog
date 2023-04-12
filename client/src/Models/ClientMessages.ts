export interface Order {
    orderId: number;
    creationTime: string;
    side: string;
    instrument: number;
    amount: number;
    price: number;
    newStatus?: number;
}

export interface ClientMessage {
    messageType: number;
    message: Order;
}
