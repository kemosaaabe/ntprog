export enum ClientMessageType {
    initialConnect = 0,
    placeOrder,
    updateOrder,
}

export enum ServerMessageType {
    success = 1,
    error,
    executionReport,
    marketDataUpdate,
}
