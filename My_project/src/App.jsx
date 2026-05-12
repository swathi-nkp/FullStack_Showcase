import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import CustomerHome from './pages/CustomerHome';
import AccountDetails from './components/AccountDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/home" element={<CustomerHome />} />
      <Route path="/account" element={<AccountDetails />} />
    </Routes>
  );
}
