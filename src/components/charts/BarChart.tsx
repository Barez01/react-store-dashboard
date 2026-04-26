import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = ({ chartData = [], chartOptions = {} }) => {
  // prevent rendering if data is invalid
  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <p className="text-gray-500">No chart data</p>;
  }

  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default ColumnChart;