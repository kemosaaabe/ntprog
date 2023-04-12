import { store } from '../app/store';

const isEqual = (a, b) => {
    const a1 = setToArray(a),
        a2 = setToArray(b);

    return (
        a1.length == a2.length &&
        a1.every(function (v, i) {
            return v === a2[i];
        })
    );
};

const setToArray = (setInstance) => {
    return Array.from(setInstance).sort((a, b) => b - a);
};

describe('orders', () => {
    test('order id must be unique', () => {
        const ordersId = store
            .getState()
            .orders.orders.map((order) => order.orderId);

        const uniqueOrdersId = new Set(ordersId);
        expect(isEqual(ordersId, uniqueOrdersId)).toBe(true);
    });

    test('order status must be equal Active || Cancelled || Filled || Rejected', () => {
        const orderStatuses = store
            .getState()
            .orders.orders.map((order) => order.status);

        const isTruthOrderStatus = orderStatuses.every(
            (status) =>
                status === 'Active' || 'Cancelled' || 'Filled' || 'Rejected'
        );

        expect(isTruthOrderStatus).toBe(true);
    });

    test('order side must be equal Sell || Buy', () => {
        const orderSides = store
            .getState()
            .orders.orders.map((order) => order.side);

        const isTruthOrderSide = orderSides.every(
            (side) => side === 'Sell' || 'Buy'
        );

        expect(isTruthOrderSide).toBe(true);
    });
});
