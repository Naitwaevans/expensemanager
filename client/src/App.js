import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import IndividualExpenses from "./pages/individualExpenses";
import IndividualIncomes from "./pages/individualIncomes";
import { useSelector } from "react-redux/es/hooks/useSelector";
import AddExpense from "./pages/addExpense";
import AddIncome from "./pages/addIncome";

const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/individual-incomes" element={<IndividualIncomes />} />
          <Route path="/individual-expenses" element={<IndividualExpenses />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/add-income" element={<AddIncome />} />
        </Route>
        <Route element={<RestrictedRoutes />}>
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
