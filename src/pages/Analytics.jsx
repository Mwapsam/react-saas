import React from 'react';
import { Charts, Header, Sidebar } from '../componenets';

const Analytics = () => (
  <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
    <Sidebar />
    <div className="flex flex-col flex-1 w-full">
      <Header />
      <main className="h-full overflow-y-auto">
        <div className="container px-6 mx-auto grid">
          <h2
            className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Dashboard
          </h2>
          <Charts />
        </div>
      </main>
    </div>
  </div>
);

export default Analytics;
