import './index.css';
import Ticker from './components/Ticker';
import SubscribeActives from './components/SubscribeActives';
import OrdersList from './components/OrdersList';

const App = () => {
    return (
        <div className="App">
            <Ticker />
            <SubscribeActives />
            <OrdersList />
        </div>
    );
};

export default App;
