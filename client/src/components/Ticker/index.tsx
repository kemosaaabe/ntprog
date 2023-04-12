import React, { FC } from 'react';
import styles from './Ticker.module.scss';
import WSConnector from '../../WSClient';
import { useAppSelector } from '../../app/hooks';
import { ClientMessageType } from '../../Enums';

interface TickerInstrument {
    id: number;
    name: string;
}

const tickerData: TickerInstrument[] = [
    {
        id: 1,
        name: 'CNN\\RUB',
    },
    {
        id: 2,
        name: 'EUR\\RUB',
    },
    {
        id: 3,
        name: 'EUR\\USD',
    },
    {
        id: 4,
        name: 'USD\\RUB',
    },
    {
        id: 5,
        name: 'TRY\\RUB',
    },
    {
        id: 6,
        name: 'BYN\\RUB',
    },
];

const amounts = [10000, 20000, 30000, 40000, 50000, 100000, 300000, 500000];
const prices = [8.55, 9.1, 2.59, 2.05, 1.05, 7.6];

const Ticker: FC = () => {
    const [activeValue, setActiveValue] = React.useState(1);
    const [activeAmount, setActiveAmount] = React.useState(amounts[0]);
    const [orderId, setOrderId] = React.useState<number>(1);
    const [sellPrice, setSellPrice] = React.useState<number>(prices[0]);
    const [buyPrice, setBuyPrice] = React.useState<number>(prices[0] + 0.12);
    const [connection] = React.useState<WSConnector>(new WSConnector());
    const instruments = useAppSelector(
        (state) => state.instruments.instruments
    );

    React.useEffect(() => {
        connection.connect();
    }, [connection]);

    const getCurrentDate = () => {
        const date = new Date();
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const month =
            date.getMonth() + 1 < 10
                ? '0' + (date.getMonth() + 1)
                : date.getMonth() + 1;
        const hours =
            date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minutes =
            date.getMinutes() < 10
                ? '0' + date.getMinutes()
                : date.getMinutes();
        const seconds =
            date.getSeconds() < 10
                ? '0' + date.getSeconds()
                : date.getSeconds();

        return `${date.getFullYear()}-${day}-${month} ${hours}:${minutes}:${seconds}`;
    };

    const onBtnClick = (type: string, price: number) => {
        if (!instruments.find((i) => i.id === activeValue)?.subscribe) {
            return;
        }
        const order = {
            orderId: orderId,
            creationTime: getCurrentDate(),
            side: type,
            instrument: activeValue,
            amount: activeAmount,
            price: price,
        };

        connection.send({
            messageType: ClientMessageType.placeOrder,
            message: order,
        });

        setTimeout(
            () =>
                connection.send({
                    messageType: ClientMessageType.updateOrder,
                    message: {
                        ...order,
                        newStatus: Math.floor(Math.random() * 3),
                    },
                }),
            Math.floor(Math.random() * 5) * 1000 + 3000
        );

        setOrderId((prev) => prev + 1);
    };

    return (
        <div className={styles.ticker}>
            <h2>Ticker</h2>
            <div className={styles.fieldsWrapper}>
                <div className={styles.selectFields}>
                    <select
                        name="tradeActive"
                        onChange={(e) => {
                            const selectedOption = Array.from(
                                e.target.querySelectorAll('option')
                            ).find((option) => option.selected);

                            if (selectedOption) {
                                setActiveValue(Number(selectedOption.value));
                                setSellPrice(
                                    Number(
                                        prices[
                                            Number(selectedOption.value) - 1
                                        ].toFixed(2)
                                    )
                                );
                                setBuyPrice(
                                    Number(
                                        (
                                            prices[
                                                Number(selectedOption.value) - 1
                                            ] + 0.12
                                        ).toFixed(2)
                                    )
                                );
                            }
                        }}
                    >
                        {tickerData.map((i) => (
                            <option key={i.id} value={i.id}>
                                {i.name}
                            </option>
                        ))}
                    </select>
                    <select
                        name="activeAmounts"
                        onChange={(e) => {
                            const selectedOption = Array.from(
                                e.target.querySelectorAll('option')
                            ).find((option) => option.selected);

                            if (selectedOption) {
                                setActiveAmount(Number(selectedOption.value));
                            }
                        }}
                    >
                        {amounts.map((amount, index) => (
                            <option key={index} value={amount}>
                                {amount}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.btnsBlock}>
                    <div className={styles.btnWrapper}>
                        <span>{sellPrice}</span>
                        <button
                            className={styles.btnSell}
                            onClick={() => onBtnClick('Sell', sellPrice)}
                        >
                            Sell
                        </button>
                    </div>
                    <div className={styles.btnWrapper}>
                        <span>{buyPrice}</span>
                        <button
                            className={styles.btnBuy}
                            onClick={() => onBtnClick('Buy', buyPrice)}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticker;
