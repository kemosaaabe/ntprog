import React, { FC } from 'react';
import Order from './Order';
import styles from './OrderList.module.scss';

const OrdersList: FC = () => {
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
                    {[...new Array(10)].map((item, index) => (
                        <Order key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersList;
