import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const OrderChart = () => {
  const chartRef = useRef(null);
  const { data: orderList } = useSWR("https://dokan-backend.onrender.com/orders", fetcher);

  useEffect(() => {
    if (orderList) {
      const labels = orderList.map(order => order.date);
      const data = orderList.map(order => order.orders.length);

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
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
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
