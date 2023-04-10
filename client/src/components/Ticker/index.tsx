import React, { ChangeEvent, FC } from 'react';
import styles from './Ticker.module.scss';

const tickerData = [];

const Ticker: FC = () => {
    const [activeValue, setActiveValue] = React.useState('');

    const activeValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const intValue = e.target.value.replace(/\D/g, '');
        setActiveValue(intValue);
    };

    return (
        <div className={styles.ticker}>
            <h2>Ticker</h2>
            <div className={styles.fieldsWrapper}>
                <div className={styles.selectFields}>
                    <select name="tradeActive">
                        <option value="">USD</option>
                        <option value="">EUR</option>
                        <option value="">RUB</option>
                    </select>
                    <input
                        placeholder="Active value..."
                        type="text"
                        name="volume"
                        value={activeValue}
                        onChange={activeValueOnChange}
                    />
                </div>
                <div className={styles.btnsBlock}>
                    <div className={styles.btnWrapper}>
                        <span>8.559</span>
                        <button className={styles.btnSell}>Sell</button>
                    </div>
                    <div className={styles.btnWrapper}>
                        <span>8.557</span>
                        <button className={styles.btnBuy}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticker;
