// app/dashboard/types.ts

export interface LineChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      fill: boolean;
    }[];
  }
  
  export interface BarChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  }
  
  export interface PieChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  }
  
// Candlestick Chart Data Type
export interface CandlestickDataPoint {
    x: string; // Date as a string
    open: number;
    high: number;
    low: number;
    close: number;
  }
  
  // Candlestick Series Data Type for ApexCharts
  export interface CandlestickSeriesData {
    x: Date | string; // ApexCharts expects Date or string for x-axis
    y: [number, number, number, number]; // y axis will be an array of [open, high, low, close]
  }
  
  // Candlestick Chart Data Type
  export interface CandlestickChartData {
    series: {
      data: CandlestickSeriesData[];
    }[];
  }
  
  