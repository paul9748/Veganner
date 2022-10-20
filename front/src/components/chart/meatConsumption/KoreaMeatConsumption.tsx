import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import koreaTotalData from "../../../assets/data-analysis/json/meatConsumptionKoreaTotal.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "top" as const,
      //display: false,
    },
    title: {
      display: true,
      text: "우리나라 연간 육류 소비량(전체)",
      font: {
        size: 18,
      },
    },
  },
  scales: {
    x: {
      grid: {
        //display: false,
        color: "#E3E3E3",
      },
    },
    y: {
      grid: {
        //display: false,
        color: "#E3E3E3",
        // tickBorderDash: [0, 10],
      },
      title: {
        display: true,
        text: "단위: ton",
      },
    },
  },
};

const yearArr = Object.keys(Object.values(koreaTotalData)[0]).map(
  (item) => Number(item) + 1995
);
const meatArr = Object.keys(koreaTotalData);
const getConsumptionArr = (i: number) => {
  return Object.values(Object.values(koreaTotalData)[i]).map(
    (item) => item / 1000
  );
};
const data = {
  // 1990 - 2019년
  labels: yearArr,
  datasets: [
    {
      label: meatArr[0],
      backgroundColor: "#e60049",
      data: getConsumptionArr(0),
      borderColor: "#e60049",
      //borderWidth: 1,
    },
    {
      label: meatArr[1],
      backgroundColor: "#0bb4ff",
      data: getConsumptionArr(1),
      borderColor: "#0bb4ff",
      //borderWidth: 1,
    },
    {
      label: meatArr[2],
      backgroundColor: "#50e991",
      data: getConsumptionArr(2),
      borderColor: "#50e991",
      //borderWidth: 1,
    },
    {
      label: meatArr[3],
      backgroundColor: "#9b19f5",
      data: getConsumptionArr(3),
      borderColor: "#9b19f5",
      //borderWidth: 1,
    },
  ],
};

function KoreaMeatConsumption() {
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
}

export default KoreaMeatConsumption;

const Container = styled.div`
  width: 800px;
`;
