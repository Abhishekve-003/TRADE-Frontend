import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { server } from '../App';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function BtcUSD() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${server}/BTCUSD`);
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
            text: 'BTCUSD Candlestick Chart'
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
            <Link to="/">
                <Button size='small' variant='contained' sx={{ borderRadius: '12px' }}>
                    EURUSD
                </Button>
            </Link>
        </div>
    );
}

export default BtcUSD;
