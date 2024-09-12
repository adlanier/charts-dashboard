"use client";  

import { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import dynamic from 'next/dynamic';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement } from 'chart.js';
import { LineChartData, BarChartData, PieChartData, CandlestickChartData, CandlestickDataPoint } from './types';

// Import ApexCharts dynamically
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

// Skeleton component for loading state
const Skeleton = () => (
  <div className="animate-pulse bg-gray-300 h-96 rounded-lg"></div>
);

const Dashboard = () => {
  const [lineChartData, setLineChartData] = useState<LineChartData | null>(null);
  const [barChartData, setBarChartData] = useState<BarChartData | null>(null);
  const [pieChartData, setPieChartData] = useState<PieChartData | null>(null);
  const [candlestickData, setCandlestickData] = useState<CandlestickChartData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from Django API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resLine, resBar, resPie, resCandlestick] = await Promise.all([
          fetch('http://127.0.0.1:8000/api/line-chart-data/'),
          fetch('http://127.0.0.1:8000/api/bar-chart-data/'),
          fetch('http://127.0.0.1:8000/api/pie-chart-data/'),
          fetch('http://127.0.0.1:8000/api/candlestick-data/'),
        ]);

        const lineData = await resLine.json();
        const barData = await resBar.json();
        const pieData = await resPie.json();
        const candlestickData = await resCandlestick.json();

        setLineChartData({
          labels: lineData.labels,
          datasets: [
            {
              label: 'Line Chart',
              data: lineData.data,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
            },
          ],
        });

        setBarChartData({
          labels: barData.labels,
          datasets: [
            {
              label: 'Bar Chart',
              data: barData.data,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });

        setPieChartData({
          labels: pieData.labels,
          datasets: [
            {
              label: 'Pie Chart',
              data: pieData.data,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        });

        setCandlestickData({
            series: [
              {
                data: candlestickData.data.map((d: CandlestickDataPoint) => ({
                  x: new Date(d.x), // Ensure x is a Date object
                  y: [d.open, d.high, d.low, d.close], // y will be an array for candlestick data
                })),
              },
            ],
          });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">📊 Dashboard 📈</h1>
  
      {error && <p className="text-red-500 text-center">{error}</p>}
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white dark:bg-black shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Line Chart</h2>
          <div className="h-96">
            {lineChartData ? (
              <Line
                data={lineChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
  
        {/* Bar Chart */}
        <div className="bg-white dark:bg-black shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Bar Chart</h2>
          <div className="h-96">
            {barChartData ? (
              <Bar
                data={barChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
  
        {/* Pie Chart */}
        <div className="bg-white dark:bg-black shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Pie Chart</h2>
          <div className="h-96">
            {pieChartData ? (
              <Pie
                data={pieChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
  
        {/* Candlestick Chart */}
        <div className="bg-white dark:bg-black shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Candlestick Chart</h2>
          <div className="h-96">
            {candlestickData ? (
             <ApexChart
             options={{
               chart: {
                 type: 'candlestick',
                 height: 350,
               },
               plotOptions: {
                 candlestick: {
                   colors: {
                     upward: '#1DA1F2', 
                     downward: '#FF6384', 
                   },
                   wick: {
                     useFillColor: false, 
                   },
                 },
               },
               xaxis: {
                 type: 'datetime',
                 labels: {
                   style: {
                     colors: '#FFFFFF', 
                   },
                 },
               },
               yaxis: {
                 labels: {
                   style: {
                     colors: '#FFFFFF', 
                   },
                 },
               },
               tooltip: {
                 theme: 'dark', 
                 x: {
                   format: 'dd MMM yyyy', 
                 },
                 y: {
                   formatter: function (value) {
                     return `$${value.toFixed(2)}`; 
                   },
                 },
               },
               grid: {
                 borderColor: '#333', 
               },
               markers: {
                 size: 5, 
                 hover: {
                   sizeOffset: 3,
                 },
               },
             }}
             series={candlestickData.series}
             type="candlestick"
             height={350}
           />
           
           
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Dashboard;
