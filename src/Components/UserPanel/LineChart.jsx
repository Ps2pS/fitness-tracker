import React from "react";

import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
const data = {
  labels: [ "Day 0","Day 1",
  "Day 2",
  "Day 3",
  "Day 4",
  "Day 5",
  "Day 6",
  "Day 7",],
  datasets: [
    {
      label: "Calories Burnt",
      data: [0,199,170,211,230,220, 190,80],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
  title: {
    display: true,
    text: "Chart Title"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 2000
        }
      }
    ]
  }
};

export default function LineChart() {
  return (
    <div className="mt-5">
        <div className="row">
            <div className="col-lg-6 d-flex align-items-center ">
                <div className="w-75">
                <div class="display-4">Graphical Representation for Calories burnt</div>

                </div>

            </div>
            <div className="col-lg-6">
            <Line data={data} legend={legend} options={options} />
            </div>
        </div>
        
      
    </div>
  );
}