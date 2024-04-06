
// import React, { useState, useEffect } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
// import axios from 'axios';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// function Dashboard() {
//   const [symbol, setSymbol] = useState('EURUSD'); 
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     fetchData(symbol);
//   }, [symbol]);

//   const fetchData = async (symbol) => {
//     try {
//       const response = await axios.get(`http://localhost:4000/api/data/${symbol}`);
//       const data = response.data;
//       const processedData = data.map(item => ({
//         x: new Date(item.fullDate),
//         y: [item.open, item.high, item.low, item.close]
//       }));
//       setChartData(processedData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const options = {
//     theme: 'light2',
//     animationEnabled: true,
//     exportEnabled: true,
//     title: {
//       text: `${symbol} Candlestick Chart`
//     },
//     axisX: {
//       valueFormatString: 'MMM DD YYYY'
//     },
//     axisY: {
//       title: 'Price'
//     },
//     data: [
//       {
//         type: 'candlestick',
//         dataPoints: chartData
//       }
//     ]
//   };

//   return (
//     <div>
//       <CanvasJSChart options={options} />
//       <Link to="/btcusd">
//         <Button size='small' variant='contained' sx={{ borderRadius: '12px' }}>
//           BTCUSD
//         </Button>
//       </Link>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { server } from '../App';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Dashboard() {
  const [symbol, setSymbol] = useState('EURUSD'); 
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData(symbol);
  }, [symbol]);

  const fetchData = async (symbol) => {
    try {
      // const response = await axios.get(`http://localhost:4000/api/data/${symbol}`);
      const response = await axios.get(`${server}/${symbol}`);
      const data = response.data;
      const processedData = data.map(item => ({
        x: new Date(item.fullDate),
        y: [item.open, item.high, item.low, item.close]
      }));
      setChartData(processedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const options = {
    theme: 'light2',
    animationEnabled: true,
    exportEnabled: true,
    zoomEnabled: true, 
    zoomType: 'xy', 
    title: {
      text: `${symbol} Candlestick Chart`
    },
    axisX: {
      valueFormatString: 'MMM DD YYYY'
    },
    axisY: {
      title: 'Price'
    },
    data: [
      {
        type: 'candlestick',
        dataPoints: chartData
      }
    ]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
      <Link to="/btcusd">
        <Button size='small' variant='contained' sx={{ borderRadius: '12px' }}>
          BTCUSD
        </Button>
      </Link>
    </div>
  );
}

export default Dashboard;

