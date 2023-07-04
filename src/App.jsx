import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { AccountDetails } from './Components/AccountDetails';
import { History } from './Components/History';
import { AddTransaction } from './Components/AddTransaction';

import { TransactionsProvider } from './Hooks/TransContext';

function App() {
  return (
        <TransactionsProvider>
          <Header />
          <div className='container'>
            <Balance />
            <AccountDetails />
            <History />
            <AddTransaction />
          </div>
        </TransactionsProvider>
  );
}

export default App;