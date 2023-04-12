import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { changeSubscribe } from '../../features/instrumentsSlice';
import styles from './SubscribeActives.module.scss';

const SubscribeActives = () => {
    const dispatch = useAppDispatch();

    const onCheckBoxClick = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            changeSubscribe({
                id: Number(e.target.id),
                subscribe: e.target.checked,
            })
        );
    };
    return (
        <div className={styles.subscribeActives}>
            <h3>Subscribes (Subscribe / Unsubscribe)</h3>
            <div className={styles.fieldsWrapper}>
                <div className={styles.fields}>
                    <div className={styles.fieldInput}>
                        <input
                            type="checkbox"
                            id="1"
                            onChange={onCheckBoxClick}
                        />
                        <label htmlFor="1">CNN \ RUB</label>
                    </div>
                    <div className={styles.fieldInput}>
                        <input
                            type="checkbox"
                            id="2"
                            onChange={onCheckBoxClick}
                        />
                        <label htmlFor="2">EUR \ RUB</label>
                    </div>
                    <div className={styles.fieldInput}>
                        <input
                            type="checkbox"
                            id="3"
                            onChange={onCheckBoxClick}
                        />
                        <label htmlFor="3">EUR \ USD</label>
                    </div>
                </div>
                <div className={styles.fields}>
                    <div className={styles.fieldInput}>
                        <input
                            type="checkbox"
                            id="4"
                            onChange={onCheckBoxClick}
                        />
                        <label htmlFor="4">USD \ RUB</label>
                    </div>
                    <div className={styles.fieldInput}>
                        <input
                            type="checkbox"
                            id="5"
                            onChange={onCheckBoxClick}
                        />
                        <label htmlFor="5">TRY \ RUB</label>
                    </div>
                    <div className={styles.fieldInput}>
                        <input
                            type="checkbox"
                            id="6"
                            onChange={onCheckBoxClick}
                        />
                        <label htmlFor="6">BYN \ RUB</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeActives;
