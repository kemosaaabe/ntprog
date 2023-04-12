import { ClientMessage } from './Models/ClientMessages';
import {
    ClientMessageType,
    Instrument,
    OrderSide,
    ServerMessageType,
} from './Enums';
import Decimal from 'decimal.js';
import { ServerEnvelope } from './Models/ServerMessages';

export default class WSConnector {
    connection: WebSocket | undefined;

    constructor() {
        this.connection = undefined;
    }

    connect = () => {
        this.connection = new WebSocket('ws://127.0.0.1:5000/ws');
        this.connection.onclose = (e) => {
            this.connection = undefined;
            console.log(e);
        };

        this.connection.onerror = () => {};

        this.connection.onopen = () => {
            console.log('Соединение установлено');
            const data = JSON.stringify({
                messageType: 0,
                message: {
                    info: 'connected',
                },
            });

            this.connection?.send(data);
        };

        this.connection.onmessage = (event) => {
            // const message: ServerEnvelope = JSON.parse(event.data);
            // console.log(event.data);
            // switch (message.messageType) {
            //     case ServerMessageType.success:
            //         console.log(message);
            //         break;
            //     case ServerMessageType.error:
            //         console.log(message);
            //         break;
            //     case ServerMessageType.executionReport:
            //         console.log(message);
            //         break;
            //     case ServerMessageType.marketDataUpdate:
            //         console.log(message);
            //         break;
            // }
            const message = JSON.parse(event.data);
            // console.log(message.message.changeTime);
            console.log(message);
        };
    };

    disconnect = () => {
        this.connection?.close();
    };

    send = (message: ClientMessage) => {
        this.connection?.send(JSON.stringify(message));
    };

    subscribeMarketData = (instrument: Instrument) => {
        this.send({
            messageType: ClientMessageType.subscribeMarketData,
            message: {
                instrument,
            },
        });
    };

    // unsubscribeMarketData = (subscriptionId: string) => {
    //     this.send({
    //         messageType: ClientMessageType.unsubscribeMarketData,
    //         message: {
    //             subscriptionId,
    //         },
    //     });
    // };

    // placeOrder = (
    //     instrument: Instrument,
    //     side: OrderSide,
    //     amount: Decimal,
    //     price: Decimal
    // ) => {
    //     this.send({
    //         messageType: ClientMessageType.placeOrder,
    //         message: {
    //             instrument,
    //             side,
    //             amount,
    //             price,
    //         },
    //     });
    // };
}
