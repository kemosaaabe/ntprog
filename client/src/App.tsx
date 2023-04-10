import React from 'react';
import './index.css';
import Ticker from './components/Ticker';
import OrdersList from './components/OrdersList';

function App() {
    return (
        <div className="App">
            <Ticker />
            <OrdersList />
        </div>
    );
}

export default App;
