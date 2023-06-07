// import "../CSS/activitiesCard.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";
import { ReactComponent as Arrow } from "../SvgIcons/DownArrow.svg";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip
);

const ActivitiesCard = () => {
  return (
    <>
      <div className="activityContainer">
        <div className="activityTitle">Activities</div>
        <div className="activityInnerContainer">
          <div className="activityRange">May-June 2021</div>
          {/* <Arrow /> */}*
        </div>
        <div style={{ height: "350px", width: "100%" }}>
          <Line
            data={{
              labels: ["week1", "week2", "week3", "week4"],
              datasets: [
                {
                  label: "Guest",
                  backgroundColor: "#9BDD7C",
                  data: [200, 400, 200, 300, 215, 450],
                  borderColor: "#9BDD7C",
                  fill: false,
                  tension: 0.4,
                },
                {
                  label: "User",
                  data: [300, 500, 300, 400, 315, 550],
                  fill: false,
                  backgroundColor: "#E9A0A0",

                  borderColor: "#E9A0A0",
                  tension: 0.4,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                x: {
                  beginAtZero: true,
                  grid: {
                    display: false,
                  },
                },
                y: {
                  suggestedMin: 0,
                  suggestedMax: 500,
                },
              },
              plugins: {
                legend: {
                  display: true,
                  position: "top",
                  align: "end",
                  labels: {
                    usePointStyle: true,
                    boxWidth: 6,
                    padding: 35,
                  },
                },
              },
              elements: {
                point: {
                  radius: 0,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ActivitiesCard;
