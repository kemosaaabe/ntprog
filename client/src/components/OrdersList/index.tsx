import React, { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import Order from './Order';
import styles from './OrderList.module.scss';

const OrdersList: FC = () => {
    const instruments = useAppSelector(
        (state) => state.instruments.instruments
    );
    const orders = useAppSelector((state) =>
        state.orders.orders.filter(
            (order) =>
                instruments.find((i) => i.id === order.instrument)?.subscribe
        )
    );
    return (
        <div className={styles.ordersList}>
            <h2>Orders List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Creation Time</th>
                        <th>Change Time</th>
                        <th>Status</th>
                        <th>Side</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Instrument</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <Order {...order} key={order.orderId} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersList;
