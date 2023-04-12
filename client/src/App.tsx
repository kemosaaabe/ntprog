import './index.css';
import Ticker from './components/Ticker';
import OrdersList from './components/OrdersList';

const App = () => {
    return (
        <div className="App">
            <Ticker />
            <OrdersList />
        </div>
    );
};

export default App;
