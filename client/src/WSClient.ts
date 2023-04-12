import { ClientMessage } from './Models/ClientMessages';
import { store } from './app/store';
import { addOrder, updateOrder } from './features/ordersSlice';
import { ServerMessageType } from './Enums';

export default class WSConnector {
    connection: WebSocket | undefined;

    constructor() {
        this.connection = undefined;
    }

    connect = () => {
        this.connection = new WebSocket('ws://127.0.0.1:5000/ws');
        this.connection.onclose = (e) => {
            this.connection = undefined;
        };

        this.connection.onerror = () => {
            console.log('Error!!!');
        };

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
            const message = JSON.parse(event.data);
            switch (message.messageType) {
                case ServerMessageType.success:
                    store.dispatch(addOrder(message.message));
                    break;
                case ServerMessageType.error:
                    console.log(message);
                    break;
                case ServerMessageType.executionReport:
                    console.log(message);
                    break;
                case ServerMessageType.marketDataUpdate:
                    store.dispatch(updateOrder(message.message));
                    break;
            }
        };
    };

    disconnect = () => {
        this.connection?.close();
        console.log('Соединенние прервано');
    };

    send = (message: ClientMessage) => {
        this.connection?.send(JSON.stringify(message));
    };
}
