import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['0', '1', '2', '3'],
  datasets: [
    { label: 'Dataset 1', data: [88, 90, 5, 8], borderColor: '#349288', fill: true },
    { label: 'Dataset 2', data: [69, 71, 31, 35], borderColor: '#9151ff', fill: false },
    { label: 'Dataset 3', data: [53, 61, 45, 67], borderColor: '#eab308', fill: false },
    { label: 'Dataset 4', data: [32, 65, 29, 63], borderColor: '#5687f2', fill: false },
    { label: 'Dataset 5', data: [22, 80, 20, 71], borderColor: '#62cb3d', fill: false },
    { label: 'Dataset 6', data: [9, 98, 1, 89], borderColor: '#eb408c', fill: false },
  ],
};

const options = {
  maintainAspectRatio: false,
  aspectRatio: 2,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: true,
        drawBorder: false,
        color: (context) => context.tick.value === 0 ? '#000000' : 'rgba(0, 0, 0, 0.1)',
        lineWidth: (context) => context.tick.value === 0 ? 2 : 1,
      },
      ticks: {
        font: {
          size: 14,
          weight: 'normal',
        },
      },
    },
    y: {
      grid: {
        display: true,
        color: (context) => context.tick.value === 0 ? '#000000' : 'rgba(0, 0, 0, 0)',
        lineWidth: (context) => context.tick.value === 0 ? 2 : 1,
        drawBorder: (context) => context.tick.value === 0,
      },
      ticks: {
        font: {
          size: 14,
          weight: 'bold',
        },
      },
    },

  },

  responsive: true,
};

function ProgressChart() {
  return <Line data={data} options={options} />;
}

export default ProgressChart;
