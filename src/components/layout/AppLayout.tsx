import React from 'react';
import { Outlet } from 'react-router-dom';
import { LeftNav } from './LeftNav';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <LeftNav />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
