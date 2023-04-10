import React, { FC } from 'react';
import styles from './Order.module.scss';

const Order: FC = () => {
    return (
        <tr>
            <td>1</td>
            <td>2022-01-01 12:00:31.31525</td>
            <td>2022-01-01 12:00:31.31525</td>
            <td>Active</td>
            <td className={styles.buy}>Buy</td>
            <td className={styles.buy}>8.559</td>
            <td className={styles.buy}>500000.00</td>
            <td>CNN/RUB</td>
        </tr>
    );
};

export default Order;
