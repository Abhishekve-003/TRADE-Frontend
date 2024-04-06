import React, { useState, useEffect, useMemo } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
import { Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { server } from '../App';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function BTCUSD() {
    const [symbol, setSymbol] = useState('BTCUSD'); 
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(symbol);
  }, [symbol]);

  const fetchData = async (symbol) => {
    try {
      setLoading(true);
      const response = await axios.get(`${server}/${symbol}`);
      const data = response.data;
      const processedData = data.map(item => ({
        x: new Date(item.fullDate),
        y: [item.open, item.high, item.low, item.close]
      }));
      setChartData(processedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };


const handleSymbolChange = (selectedSymbol) => {
    setSymbol(selectedSymbol);
};

  const options = useMemo(() => ({
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
  }), [chartData]);

  return (
    <div>
        <Link to="/">
                 <Button onClick={() => handleSymbolChange('EURUSD')}>Go To EURUSD</Button>
        </Link>
      {/* <Button onClick={() => handleSymbolChange('BTCUSD')}>BTCUSD</Button> */}
      {loading ? <CircularProgress /> : <CanvasJSChart options={options} />}
    </div>
  );
}

export default BTCUSD;
