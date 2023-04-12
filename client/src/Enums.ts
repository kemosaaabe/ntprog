export enum ClientMessageType {
    initialConnect = 0,
    subscribeMarketData,
    unsubscribeMarketData,
    placeOrder,
}

export enum ServerMessageType {
    success = 1,
    error,
    executionReport,
    marketDataUpdate,
}

export enum OrderSide {
    buy = 1,
    sell,
}

export enum OrderStatus {
    active = 1,
    filled,
    rejected,
    cancelled,
}

export enum Instrument {
    eur_usd = 1,
    eur_rub,
    usd_rub,
}
