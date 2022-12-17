import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  cutoutPercentage: 73,
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [199, 170, 211, 230, 220, 190, 80],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
        "rgba(145, 181, 64)",
      ],
      borderColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
        "rgba(145, 181, 64)",
      ],
      //   borderWidth: 1,
    },
  ],
};
const options = {
  plugins: {
    title: {
      display: true,

      color: "Black",
      font: {
        size: 34,
      },
      padding: {
        top: 30,
        bottom: 30,
      },
      responsive: true,
      animation: {
        animateScale: true,
      },
    },
  },
};
function DonutChart() {
  return (
    <div>
      <div className="row">
       
        <div className="col-lg-6">
            <img className="calories-track-img" src="https://img.freepik.com/free-vector/gym-sport-isometric-concept_1284-14238.jpg?t=st=1657704126~exp=1657704726~hmac=f1274eaebe1977daa248517bf519b4e37f0d79cdde21db16006473778cc97157&w=826" alt="" />
        </div>
        <div className="col-lg-6">
          <div className="text-center">
            <h5 className="">Calories Burnt This Week</h5>
          </div>
          <div style={{ width: "400px", margin: "auto auto" }}>
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonutChart;
