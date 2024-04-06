
import React, { useState, useEffect, useMemo } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
import { Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { server } from '../App';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Dashboard() {
    const [symbol, setSymbol] = useState('EURUSD'); 
    const [chartData, setChartData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(symbol);
    }, [symbol]);

    const fetchData = async (symbol) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${server}/${symbol}`);
            const data = response.data;
            const processedData = data.map(item => ({
                x: new Date(item.fullDate),
                y: [item.open, item.high, item.low, item.close]
            }));
            setChartData(processedData);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
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
    }), [symbol, chartData]);

    return (
        <div>
          <Link to="/btcusd">
               <Button onClick={() => handleSymbolChange('BTCUSD')}>Go To BTCUSD</Button>
          </Link>
            
            {/* <Button onClick={() => handleSymbolChange('EURUSD')}>EURUSD</Button> */}
            {isLoading ? (
                <CircularProgress />
            ) : (
                <CanvasJSChart options={options} />
            )}
        </div>
    );
}

export default Dashboard;
