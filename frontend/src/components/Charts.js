import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Charts = ({ data }) => {
  const chartData = {
    labels: data.last_7_days,
    datasets: [
      {
        label: "Active Users",
        backgroundColor: "blue",
        data: data.active_users,
      },
      {
        label: "Joined Users",
        backgroundColor: "orange",
        data: data.joined_users,
      },
    ],
  };

  return (
    <div>
      <h2>Last 7 Days Users Analysis</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Charts;
