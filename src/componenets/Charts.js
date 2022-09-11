import React from 'react';

const Charts = () => (
  <>
    <h2
      className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
    >
      Charts
    </h2>
    <div className="grid gap-6 mb-8 md:grid-cols-2">
      <div
        className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Revenue
        </h4>
        <canvas id="pie" />
        <div
          className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
        >

          <div className="flex items-center">
            <span
              className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"
            />
            <span>Shirts</span>
          </div>
          <div className="flex items-center">
            <span
              className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
            />
            <span>Shoes</span>
          </div>
          <div className="flex items-center">
            <span
              className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
            />
            <span>Bags</span>
          </div>
        </div>
      </div>
      <div
        className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
      >
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Traffic
        </h4>
        <canvas id="line" />
        <div
          className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
        >

          <div className="flex items-center">
            <span
              className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
            />
            <span>Organic</span>
          </div>
          <div className="flex items-center">
            <span
              className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
            />
            <span>Paid</span>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Charts;
