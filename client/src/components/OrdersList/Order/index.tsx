import React, { FC } from 'react';
import styles from './Order.module.scss';
import { orderInterface } from '../../../features/ordersSlice';
import { useAppSelector } from '../../../app/hooks';

const Order: FC<orderInterface> = ({
    orderId,
    creationTime,
    changeTime,
    status,
    side,
    instrument,
    amount,
    price,
}) => {
    const instruments = useAppSelector(
        (state) => state.instruments.instruments
    );

    return (
        <tr>
            <td>{orderId}</td>
            <td>{creationTime}</td>
            <td>{changeTime}</td>
            <td>{status}</td>
            <td className={side === 'Buy' ? styles.buy : styles.sell}>
                {side}
            </td>
            <td className={side === 'Buy' ? styles.buy : styles.sell}>
                {price}
            </td>
            <td className={side === 'Buy' ? styles.buy : styles.sell}>
                {amount}
            </td>
            <td>{instruments.find((i) => i.id === instrument)?.name}</td>
        </tr>
    );
};

export default Order;
