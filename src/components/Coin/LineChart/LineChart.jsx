import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumber } from '../../../functions/convertNumbers';
import { type } from '@testing-library/user-event/dist/type';

const LineChart = ({ chartData, priceType, multiAxis }) => {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
            coin1: {
                type: "linear",
                display: true,
                position: "left",
                ticks: {
                    callback: function (value) {
                        return priceType === "prices" 
                            ? `$${value.toLocaleString()}` 
                            : `$${convertNumber(value)}`;
                    },
                },
            },
            ...(multiAxis && {
                coin2: {
                    type: "linear",
                    display: true,
                    position: "right",
                    ticks: {
                        callback: function (value) {
                            return priceType === "prices" 
                                ? `$${value.toLocaleString()}` 
                                : `$${convertNumber(value)}`;
                        },
                    },
                },
            }),
        },
    };

    const updatedChartData = {
    ...chartData,
    datasets: chartData.datasets.map(dataset => ({
      ...dataset,
      yAxisID: multiAxis ? dataset.yAxisID : 'coin1', // Use 'coin1' for single axis
    })),
  };

  return <Line data={updatedChartData} options={options} />;
};


export default LineChart;
