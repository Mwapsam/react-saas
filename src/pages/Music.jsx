import React from 'react';
import { Header, Sidebar, Table } from '../componenets';

const Music = () => (
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
          <Table />
        </div>
      </main>
    </div>
  </div>
);

export default Music;
