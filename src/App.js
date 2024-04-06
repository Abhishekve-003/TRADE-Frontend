import React from 'react';
import { Route, Routes } from "react-router-dom"

import Dashboard from './components/Dashboard';
import BtcUSD from './components/BtcUSD';
import DashboardMain from './dashboard/DashboardMain';

export  const server = "https://trade-backend-rlpl.onrender.com/api/data";

const App =() => {
  return (
    <div >
      <Routes>

        <Route
          element={
            <DashboardMain/>
          }
        >
          <Route path="/" element={
            <Dashboard />}
          />
          <Route path="/btcusd" element={
            <BtcUSD />
          } />
          

        </Route>
      </Routes>
    </div>
  );
}

export default App;
