import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labelsWeekly = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
      font: {
        size: 18,
        weight: "bold",
      },
    },
    tooltip: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Day",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      ticks: {
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Value",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      ticks: {
        font: {
          size: 16,
          weight: "bold",
        },
        suggestedMin: 0,
        suggestedMax: 100,
        stepSize: 10,
        min: 0, // Ensure fixed range
        max: 100, // Ensure fixed range
      },
    },
  },
  datasets: {
    text: {
      font: {
        size: 60,
        weight: "bold",
      },
    },
  },
};

function graphData(data){
  return (
    {
      labels: labelsWeekly,
      datasets: [
        {
          label: "Tỉ lệ hàng bỏ vào giỏ",
          data:  [34, 45, 56, 67, 78, 89, 90],
          
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Tỉ lệ trả lại hàng",
          data: data,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    }
  )
}

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://multidisciplinary-project.onrender.com/api/v1/week/test"
        );
        const data = await response.json();
        console.log(data.data);
        setData(data.data);
      } catch (error) {
        alert("Error fetching data: " + error.message);
      }
    };

    fetchData();
  }
  , []);

  return (
    <div className="container">
      <Line
        style={{ marginBottom: "30px" }}
        options={options}
        data = {graphData(data)}
      />


    </div>
  );
};

export default LineChart;
