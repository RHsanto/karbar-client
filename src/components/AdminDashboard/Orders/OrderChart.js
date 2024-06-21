import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const OrderChart = () => {
  const chartRef = useRef(null);
  const { data: orderList } = useSWR("https://dokan-backend.onrender.com/orders", fetcher);

  useEffect(() => {
    if (orderList) {
      const labels = orderList.map(order => order.date).slice(-20);
      const data = orderList.map(order => order.orders.length).slice(-20);

      // Define colors
      const backgroundColors = [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ];

      // Destroy the existing chart if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create the new chart
      chartRef.current = new Chart(document.getElementById("orderChart"), {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Number of Orders",
              data: data,
              backgroundColor: backgroundColors.slice(0, data.length),
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [orderList]);

  return (
    <div>
      <canvas id="orderChart" width="400" height="200"></canvas>
    </div>
  );
};

export default OrderChart;
