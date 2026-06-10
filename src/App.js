import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import BalanceDisplay from "./features/account/BalanceDisplay";
import AccountOperations from "./features/account/AccountOperations";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
