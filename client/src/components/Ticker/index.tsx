import React, { FC } from 'react';
import styles from './Ticker.module.scss';

const tickerData = [];

const Ticker: FC = () => {
    return (
        <div className={styles.ticker}>
            <div className={styles.selectFields}>
                <select name="tradeActive">
                    <option value="">USD</option>
                    <option value="">EUR</option>
                    <option value="">RUB</option>
                </select>
                <input type="text" name="volume" />
            </div>
            <div className={styles.btnsBlock}>
                <div className={styles.sellBlock}>
                    <span></span>
                    <button className={styles.btnSell}>Sell</button>
                </div>
                <div className={styles.buyBlock}>
                    <span></span>
                    <button className={styles.btnBuy}>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Ticker;
