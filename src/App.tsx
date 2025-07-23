import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardProvider } from './context/DashboardContext';
import { ItemsProvider } from './context/ItemsContext';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardPage } from './pages/DashboardPage';
import { ItemsPage } from './pages/ItemsPage';

function App() {
  return (
    <DashboardProvider>
      <ItemsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="items" element={<ItemsPage />} />
            </Route>
          </Routes>
        </Router>
      </ItemsProvider>
    </DashboardProvider>
  );
}

export default App;