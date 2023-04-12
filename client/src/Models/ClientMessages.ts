import { Envelope } from './Base';
import { ClientMessageType, Instrument, OrderSide } from '../Enums';
import Decimal from 'decimal.js';

export interface ClientEnvelope extends Envelope {
    messageType: ClientMessageType;
}

export interface ClientMessage {
    messageType: number;
    message: object;
}

export interface SubscribeMarketData extends ClientMessage {
    instrument: Instrument;
}

export interface UnsubscribeMarketData extends ClientMessage {
    subscriptionId: string;
}

export interface PlaceOrder extends ClientMessage {
    instrument: Instrument;
    side: OrderSide;
    amount: Decimal;
    price: Decimal;
}
